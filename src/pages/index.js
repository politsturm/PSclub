import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/IntroSection"
import StepSection from "../components/StepSection"
import ProgrammSection from "../components/ProgrammSection"

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
				description="«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма."
				direction="left"
			>
				<Img fixed={data.booksImage.childImageSharp.fixed} />
			</StepSection>

			<StepSection
				title="Практика борьбы за права рабочих"
				stepNumber="02"
				description="«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма."
				direction="right"
			>
				<Img fixed={data.megaphoneImage.childImageSharp.fixed} />
			</StepSection>

			<StepSection
				title="Современное коммунистическое движение"
				stepNumber="03"
				description="«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма."
				direction="left"
			>
				<Img style={{transform: "rotate(15deg)"}} fixed={data.flagImage.childImageSharp.fixed} />
			</StepSection>

      <ProgrammSection />
			{/*<Link to="/page-2/">Go to page 2</Link>*/}
		</Layout>
	)
}

export default IndexPage
