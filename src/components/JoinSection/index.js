import React, {Component} from "react"
import axios from "axios"
import classNames from "classnames"
import Button from "../Button"
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {formStyles} = styles;
const {wrapper} = styleHelpers;

class JoinSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			reason: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		const {name, value} = event.target;

		this.setState({[name]: value});
	}

	onSubmit(event) {
		event.preventDefault();

		const {name, reason, email} = this.state;

		console.log('name >', name, 'reason >', reason, 'email >', email);

		axios.get('http://politsturm.com/mail/', {
				firstName: 'Fred',
				lastName: 'Flintstone'
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		const sectionClasses = classNames({
			[wrapper]: true
		})

		const {name, email, reason} = this.state;

		return (
			<div className={sectionClasses}>
				<h2>Вступить</h2>
				<div style={{width: '100%'}}>
					<form className={formStyles} onSubmit={this.onSubmit}>
						<TextField
							label="Введите ваше имя"
							margin="normal"
							name="name"
							fullWidth
							required
							style={{marginBottom: "50px"}}
							value={name}
							onChange={this.onChange}
						/>

						<TextField
							label="Введите ваш E-mail адрес"
							type="email"
	         				name="email"
							margin="normal"
							fullWidth
							required
							style={{marginBottom: "50px"}}
							value={email}
							onChange={this.onChange}
						/>

						<TextField
							label="Почему вы хотите вступить в МК?"
							required
							margin="normal"
							name="reason"
							multiline
							fullWidth
							value={reason}
							onChange={this.onChange}
						/>

						<div style={{textAlign: "right"}}>
							<Button style={{marginTop: "70px"}}>Вступить</Button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default JoinSection
