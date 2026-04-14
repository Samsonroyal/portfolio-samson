import Link from 'next/link';

import Section from '../../structure/section';
import Container from '../../structure/container';

import Icon from '../../utils/icon.util';

import css from '../../../styles/sections/articles/content.module.scss';

export default function ArticleContent({ article }) {
	const date = new Date(article.pubDate).toDateString();

	return (
		<Section classProp="borderBottom">
			<Container spacing={'verticalXXXXLrg'}>
				<div className={css.container}>
					<Link href="/articles">
						<a className={css.backLink}>
							<Icon icon={['fas', 'arrow-left']} /> Back to Articles
						</a>
					</Link>

					<header className={css.header}>
						<h1>{article.title}</h1>
						<div className={css.meta}>
							<span>By {article.author}</span>
							<span>{date}</span>
						</div>
						{article.categories && article.categories.length > 0 && (
							<div className={css.categories}>
								{article.categories.map((category) => (
									<span key={category} className={css.category}>
										<Icon icon={['fab', 'medium']} /> {category}
									</span>
								))}
							</div>
						)}
					</header>

					{article.thumbnail && (
						<div className={css.heroImage}>
							<img
								src={article.thumbnail}
								alt={article.title}
							/>
						</div>
					)}

					<div
						className={css.articleBody}
						dangerouslySetInnerHTML={{ __html: article.content }}
					/>

					<div className={css.footer}>
						<a href={article.link} target="_blank" rel="noreferrer">
							Read on Medium <Icon icon={['fab', 'medium']} />
						</a>
					</div>
				</div>
			</Container>
		</Section>
	);
}
