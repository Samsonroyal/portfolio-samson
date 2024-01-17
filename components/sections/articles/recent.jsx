import Section from "../../structure/section";
import Container from "../../structure/container";

import Image from "next/image";
import SectionTitle from "../../blocks/section.title.block";

import Icon from "../../utils/icon.util";

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
            return (
              <article key={article.id} className={css.project}> {/* Use article.id as the key */}
                <span className={css.featuredImage}>
                  <Image
                    src={article.thumbnail}
                    alt="Article thumbnail"
                    layout="fill"
                  />
                </span>
                <span className={css.header}>
                  <a href={article.link} rel="noreferrer" target="_blank">
                    {article.title} {" "}
                    <Icon icon={["fad", "arrow-up-right-from-square"]} />
                  </a>
                </span>
                <span className={css.descriptionContainer}></span>
                <span className={css.details}>
                  <p>By {article.author}</p>
                  <p className={css.pushedAt}>{date}</p>
                </span>
                <span className={css.topicsContainer}>
                  {article.categories.map((category, index) => (
                    <span key={category} className={css.topics}> {/* Use category as the key */}
                      <Icon icon={["fab", "medium"]} /> {category}
                    </span>
                  ))}
                </span>
              </article>
            );
          })}
        </section>
      </Container>
    </Section>
  );
}
