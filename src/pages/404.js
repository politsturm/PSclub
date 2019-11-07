import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentSection from "../components/ContentSection"
import ContactSection from "../components/ContactSection"
import Title from "../components/Title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>404: Не найдено</Title>
    <ContentSection>
	    <p>Такой страницы не существует</p>
    </ContentSection>
    <ContactSection />
  </Layout>
)

export default NotFoundPage
