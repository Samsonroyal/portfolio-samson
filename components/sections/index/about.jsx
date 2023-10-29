// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes Software engineering, systems architecture, photography, branding, and User-centered Design(Design Thinking) I am a well-rounded Resource and a digital professional, did I mention that I am called as an entrepreneur? Yes that's it."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/samson-photo.jpg" alt="Handsome Psalmson"/>
						{/* <Image src="/img/samson-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="The Potato Mash that's soft to the touch"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my software engineering and bug battles, I have strong leadership, ideation and business research/validation skills—honed through my experience as a hyper entrepreneur / startup founder, freelancer, and fulltime Ugandan. Outside of work, I enjoy attending Phaneroo services, praying in tongues and listening to sermons. My active life is spent around books and poems, I read, write and journal my thoughts. I also run a twitter space(monthly) for poetry's sake. I am confident in my ability to play chess, scrabble, rugby and any game that involves brains and adrenaline."
						/>
						<BadgesBlock 
							title="The Rocky Combos that made this star" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of my identity is that I was born, raised and bred in Uganda; the pearl of Africa. To many people in the outside world, it's a third world country, but to me it is a training ground, I have lived in Kampala( our capital City ) for the past 4 years and I think If you can survive in Kampala, you can survive anywhere in the Universe(except the sun..) It has taught me to network, value relationships and cultivate intentional ones; to be diligent and snappy with work and always deliver results. It has also taught me to be frugal with what I have, to live life always on the edge and to ensure that I always give back when I get to a high place in life."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]