import { Link } from "gatsby"
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
						<li className={menuItem}><Link to="/about/">О нас</Link></li>
						<li className={menuItem}><Link to="/course/">Курс обучения</Link></li>
						<li className={menuItem}><a href="#">Литература</a></li>
					</ul>
					<ul>
						<li className={menuItem}><a href="#">FAQ</a></li>
						<li className={menuItem}><a href="/#map">Карта клубов</a></li>
						<li className={menuItem}><a href="https://politsturm.com/">Politsturm</a></li>
					</ul>
					<ul>
						<li className={menuItem}><a href="https://vk.com/politsturm">VK</a></li>
						<li className={menuItem}><a href="https://t.me/politsturm">Telegram</a></li>
						<li className={menuItem}><a href="mailto:politsturm@gmail.com">Email</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ContactSection
