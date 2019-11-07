import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "../Button"
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper, sectionText} = styleHelpers;
const {introWrapper} = styles;

const IntroSection = () => (
	<div className={wrapper}>
		<div className={introWrapper}>
		<h1>Что такое марксистские клубы ПШ?</h1>
		<div className={sectionText}>Марксистские клубы читателей информресурса “Politsturm” - это независимое международное коммунистическое объединение граждан, занимающихся изучением научной теории марксизма-ленинизма и практики её применения.</div>
		<a href="#join">
			<Button style={{marginTop: "30px"}}>
				Вступить
			</Button>
		</a>
		</div>
	</div>
)

IntroSection.propTypes = {
}

IntroSection.defaultProps = {
}

export default IntroSection
