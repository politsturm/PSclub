import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import css from "./styles.module.css"

const {button} = css;

const Button = ({children, style}) => (
  <button className={button} style={style}>{children}</button>
)

Button.propTypes = {
}

Button.defaultProps = {
}

export default Button
