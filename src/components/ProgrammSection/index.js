import React from "react"
import classNames from "classnames"
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper, sectionText} = styleHelpers;
const {programmItem, itemsWrapper, itemHeading, itemText} = styles;

const ProgrammSection = () => {
	const sectionClasses = classNames({
		[wrapper]: true
	})

	return (
		<div className={sectionClasses} >
			<h2>План работы</h2>

			<div className={itemsWrapper}>
				<div className={programmItem}>
					<h3 className={itemHeading}>Центральный информресурс</h3>
					<p className={itemText}>«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма.</p>
				</div>

				<div className={programmItem}>
					<h3 className={itemHeading}>Кружковое движение</h3>
					<p className={itemText}>«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма.</p>
				</div>

				<div className={programmItem}>
					<h3 className={itemHeading}>Связь с рабочим движением</h3>
					<p className={itemText}>«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма.</p>
				</div>

				<div className={programmItem}>
					<h3 className={itemHeading}>Образование компартии</h3>
					<p className={itemText}>«Политштурм» – независимый коммунистический информационный ресурс, освещающий события с точки зрения марксизма-ленинизма.</p>
				</div>
			</div>
		</div>
	)
}

export default ProgrammSection
