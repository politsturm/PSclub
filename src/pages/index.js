import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/IntroSection"
import StepSection from "../components/StepSection"
import ProgrammSection from "../components/ProgrammSection"
import MapSection from "../components/MapSection"
import JoinSection from "../components/JoinSection"
import ContactSection from "../components/ContactSection"

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			booksImage: file(relativePath: { eq: "books.png" }) {
				childImageSharp {
					fixed(width: 274, height: 213) {
						...GatsbyImageSharpFixed
					}
				}
			},
			flagImage: file(relativePath: { eq: "flag.png" }) {
					childImageSharp {
					fixed(width: 228, height: 286) {
						...GatsbyImageSharpFixed
					}
				}
			},
			megaphoneImage: file(relativePath: { eq: "megaphone.png" }) {
				childImageSharp {
					fixed(width: 230, height: 191) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO title="Политштурм" />
			<IntroSection />

			<StepSection
				title="Изучение теории"
				stepNumber="01"
				description="Знание марксизма-ленинизма позволит осознать происходящие в мире события и выбрать верную тактику действий, избежать ошибок и уклонов на пути к строительству социализма."
				direction="left"
			>
				<Img fixed={data.booksImage.childImageSharp.fixed} />
			</StepSection>

			<StepSection
				title="Практика борьбы за права рабочих"
				stepNumber="02"
				description="Освещение проблем рабочих, защита интересов трудящихся, организация профсоюзов и классовая агитация среди рабочего класса - важная часть практики МК."
				direction="right"
			>
				<Img fixed={data.megaphoneImage.childImageSharp.fixed} />
			</StepSection>

			<StepSection
				title="Современное коммунистическое движение"
				stepNumber="03"
				description="МК на практике применяют марксизм-ленинизм к текущим условиям и ведут современную коммунистическую работу, учитывая реалии XXI века. Подготовленные в МК коммунисты станут опорой для формирования будущих коммунистических партий."
				direction="left"
			>
				<Img style={{transform: "rotate(15deg)"}} fixed={data.flagImage.childImageSharp.fixed} />
			</StepSection>

			<ProgrammSection />
			<MapSection />
			<JoinSection />
			<ContactSection />
			{/*<Link to="/page-2/">Go to page 2</Link>*/}
		</Layout>
	)
}

export default IndexPage
