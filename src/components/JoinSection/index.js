import React from "react"
import classNames from "classnames"
import Button from "../Button"
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styleHelpers from "../helpers.module.css"

const {wrapper} = styleHelpers;

const JoinSection = ({center, zoom}) => {
	const sectionClasses = classNames({
		[wrapper]: true
	})

	return (
		<div className={sectionClasses} style={{marginTop: "250px"}}>
			<h2>Вступить</h2>
			<div style={{width: '100%'}}>
				<form style={{maxWidth: "770px", margin: "80px auto 0 auto"}}>
					<TextField
						label="Введите ваше имя"
						margin="normal"
						name="name"
						fullWidth
						style={{marginBottom: "50px"}}
					/>

					<TextField
						label="Введите ваш E-mail адрес"
						type="email"
         				name="email"
						margin="normal"
						fullWidth
						style={{marginBottom: "50px"}}
					/>

					<TextField
						label="Почему вы хотите вступить в МК?"
						margin="normal"
						multiline
						fullWidth
					/>

					<div style={{textAlign: "right"}}>
						<Button style={{marginTop: "70px"}}>Вступить</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default JoinSection
