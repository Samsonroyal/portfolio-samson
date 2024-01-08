import FeaturedProject from '../../blocks/projects/featured';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';

import css from '../../../styles/sections/projects/featured.module.scss';
import content from '../../../content/projects/featured.json';

export default function FeaturedProjects() {
  return (
    <Section className={css.hasBg}>
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title="Featured Projects"
          preTitle="Design & Frontend"
          subTitle="I am Focused on the User Experience, and Beautiful Interfaces."
        />
        {content.map((data, index) => (
          <FeaturedProject content={data} index={index} key={index} />
        ))}
      </Container>
      <div className={css.bgContainer}>
        <span className={css.orbitalBg}>
          <span className={`${css.bgSection}`}>
            <span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span>
          </span>
          <span className={`${css.bgSection}`}>
            <span className={`${css.bgInner} ${css.heroCenter}`}></span>
          </span>
          <span className={`${css.bgSection}`}>
            <span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span>
          </span>
        </span>
        <span className={css.afterGlowBg}></span>
      </div>
    </Section>
  );
}
