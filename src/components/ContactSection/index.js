import React from "react"
import classNames from "classnames"
import styleHelpers from "../helpers.module.css"
import styles from "./styles.module.css"

const {wrapper} = styleHelpers;
const {
	footerWrapper,
	menuItem
} = styles;

const ContactSection = ({center, zoom}) => {
	const sectionClasses = classNames({
		[wrapper]: true
	})

	return (
		<div className={sectionClasses} style={{marginTop: "250px"}}>
			<h2>Контакты</h2>
			<div style={{width: "100%"}}>
				<div className={footerWrapper}>
					<ul>
						<li className={menuItem}><a href="#">О нас</a></li>
						<li className={menuItem}><a href="#">Курс обучения</a></li>
						<li className={menuItem}><a href="#">Литература</a></li>
					</ul>
					<ul>
						<li className={menuItem}><a href="#">FAQ</a></li>
						<li className={menuItem}><a href="#">Карта клубов</a></li>
						<li className={menuItem}><a href="#">Politsturm.com</a></li>
					</ul>
					<ul>
						<li className={menuItem}><a href="#">VK</a></li>
						<li className={menuItem}><a href="#">Telegram</a></li>
						<li className={menuItem}><a href="#">Email</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ContactSection
