import Head from 'next/head';
import sanitizeHtml from 'sanitize-html';

import ArticleContent from '../../components/sections/articles/content';
import Color from '../../components/utils/page.colors.util';

import { findArticleBySlug } from '../../components/utils/slug.util';
import colors from '../../content/articles/_colors.json';
import settings from '../../content/_settings.json';

export default function ArticlePage({ article }) {
	// Strip HTML from description for meta tag
	const plainDescription = article.description
		? article.description.replace(/<[^>]*>/g, '').slice(0, 160)
		: '';

	return (
		<>
			<Head>
				<title>{article.title} | {settings.name}</title>
				<meta name="description" content={plainDescription} />
				<meta property="og:title" content={article.title} />
				<meta property="og:description" content={plainDescription} />
				{article.thumbnail && (
					<meta property="og:image" content={article.thumbnail} />
				)}
				<meta property="og:type" content="article" />
			</Head>
			<Color colors={colors} />
			<ArticleContent article={article} />
		</>
	);
}

export async function getServerSideProps({ params, res }) {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	);

	const mediumRSS = await fetch(
		`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`
	);
	const mediumArticles = await mediumRSS.json();

	const article = findArticleBySlug(mediumArticles.items, params.slug);

	if (!article) {
		return { notFound: true };
	}

	// Extract thumbnail from content HTML if the feed doesn't provide one
	if (!article.thumbnail) {
		const match = article.content && article.content.match(/<img[^>]+src=["']([^"']+)/);
		if (match) article.thumbnail = match[1];
	}

	// Sanitize HTML content server-side
	article.content = sanitizeHtml(article.content, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption', 'iframe']),
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
			iframe: ['src', 'width', 'height', 'frameborder', 'allowfullscreen'],
		},
	});

	return { props: { article } };
}
