import Link from 'next/link';

import Section from '../structure/section';
import Container from '../structure/container';
import SectionTitle from '../blocks/section.title.block';
import Icon from '../utils/icon.util';

import css from '../../styles/sections/comingsoon.module.scss';

export default function ComingSoon() {
	return (
		<Section classProp={css.hasBg}>
			<Container spacing={'verticalXXXXLrg'}>
				<div className={css.content}>
					<SectionTitle
						preTitle="In Progress"
						title="Case Studies"
						subTitle="Deep dives into real-world projects — the problems, the process, and the impact."
					/>

					<div className={css.previewCards}>
						<div className={css.card}>
							<span className={css.cardIcon}>
								<Icon icon={['fad', 'magnifying-glass-chart']} />
							</span>
							<h3>Problem &amp; Context</h3>
							<p>Understanding the challenge, the stakeholders, and the constraints that shaped each project.</p>
						</div>
						<div className={css.card}>
							<span className={css.cardIcon}>
								<Icon icon={['fad', 'code-branch']} />
							</span>
							<h3>Technical Approach</h3>
							<p>Architecture decisions, technology choices, and the engineering strategies used to deliver results.</p>
						</div>
						<div className={css.card}>
							<span className={css.cardIcon}>
								<Icon icon={['fad', 'chart-line-up']} />
							</span>
							<h3>Results &amp; Impact</h3>
							<p>Measurable outcomes, lessons learned, and how each project moved the needle.</p>
						</div>
					</div>
				</div>
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span className={css.bgSection}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={css.bgSection}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={css.bgSection}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	);
}
