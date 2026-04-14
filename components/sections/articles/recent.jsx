import Section from "../../structure/section";
import Container from "../../structure/container";

import Link from "next/link";
import SectionTitle from "../../blocks/section.title.block";

import Icon from "../../utils/icon.util";
import { titleToSlug } from "../../utils/slug.util";

import css from "../../../styles/sections/articles/recent.module.scss";

export default function Recent({ mediumArticles }) {
  const articles = mediumArticles.items;

  return (
    <Section classProp="borderBottom">
      <Container spacing={"verticalXXXXLrg"}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Informative"
          subTitle="A journey to document and share my personal experiences as a startup founder and software engineer."
        />
        <section className={css.projects}>
          {articles.map((article, index) => {
            const date = new Date(article.pubDate).toDateString();
            const slug = titleToSlug(article.title);
            const excerpt = article.description
              ? article.description.replace(/<[^>]*>/g, '').slice(0, 120) + '...'
              : '';
            return (
              <Link key={article.id} href={`/articles/${slug}`}>
                <a className={css.projectLink}>
                  <article className={css.project}>
                    {article.thumbnail && (
                      <span className={css.featuredImage}>
                        <img src={article.thumbnail} alt={article.title} />
                      </span>
                    )}
                    <span className={css.header}>
                      {article.title}
                    </span>
                    <span className={css.descriptionContainer}>
                      <p className={css.description}>{excerpt}</p>
                    </span>
                    <span className={css.details}>
                      <p>By {article.author}</p>
                      <p className={css.pushedAt}>{date}</p>
                    </span>
                    <span className={css.topicsContainer}>
                      {article.categories.map((category) => (
                        <span key={category} className={css.topics}>
                          <Icon icon={["fab", "medium"]} /> {category}
                        </span>
                      ))}
                    </span>
                  </article>
                </a>
              </Link>
            );
          })}
        </section>
      </Container>
    </Section>
  );
}
