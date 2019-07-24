import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper, sectionText} = styleHelpers;
const {sectionWrapper, textWrapper, stepNumberStyle} = styles;

const StepSection = ({children, title, stepNumber, description, direction}) => {
	const sectionClasses = classNames({
		[wrapper]: true,
		[sectionWrapper]: true
	})

	return (
		<div className={sectionClasses} >
			<div className={textWrapper} style={{order: direction === "left" ? "0" : "1"}}>
				<div className={stepNumberStyle}>{stepNumber}</div>
				<div>
					<h2>{title}</h2>
					<div className={sectionText}>{description}</div>
				</div>
			</div>
			{children}
		</div>
	)
}

StepSection.propTypes = {
}

StepSection.defaultProps = {
}

export default StepSection
