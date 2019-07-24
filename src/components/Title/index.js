import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import css from "./styles.module.css"

const {
  typography
} = css;

const Title = ({children}) => (
  <div className={typography}>
    {children}
  </div>
)

Title.propTypes = {
	children: PropTypes.node.isRequired
}

export default Title
