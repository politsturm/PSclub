import React from "react"
import classNames from "classnames"
import styleHelpers from "../helpers.module.css"

const {wrapper} = styleHelpers;

const ContentSection = ({children}) => {
	return (
		<div className={wrapper} style={{maxWidth: "720px", display: "block", marginTop: "100px"}}>
			{children}
		</div>
	)
}

export default ContentSection
