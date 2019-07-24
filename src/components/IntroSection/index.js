import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "../Button"
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper, sectionText} = styleHelpers;

const IntroSection = () => (
  <div className={wrapper} style={{marginBottom: "200px"}}>
    <div style={{width: "535px"}}>
      <h1>Что такое марксистский клуб?</h1>
      <div className={sectionText}>«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма.</div>
      <Button style={{marginTop: "30px"}}>Вступить</Button>
    </div>
  </div>
)

IntroSection.propTypes = {
}

IntroSection.defaultProps = {
}

export default IntroSection
