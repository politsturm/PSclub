import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import css from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper} = styleHelpers;

const {
  typography
} = css;

const Title = ({children}) => (
	<div className={wrapper} style={{marginBottom: "100px"}}>
		<div className={typography}>
			{children}
		</div>
	</div>
)

Title.propTypes = {
	children: PropTypes.node.isRequired
}

export default Title
