import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentSection from "../components/ContentSection"
import ContactSection from "../components/ContactSection"
import Title from "../components/Title"

const AboutPage = () => (
  <Layout>
    <SEO title="О нас" />
    <Title>О нас</Title>
    <ContentSection>
	    <p>«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма.</p>
    </ContentSection>
    <ContactSection />
  </Layout>
)

export default AboutPage
