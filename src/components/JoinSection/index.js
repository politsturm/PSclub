import React, {Component} from "react"
import axios from "axios"
import classNames from "classnames"
import Button from "../Button"
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {
	formStyles,
	confirmedMessage,
	errorMessage
} = styles;
const {wrapper} = styleHelpers;

class JoinSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			reason: '',
			sent: false,
			loading: false,
			error: false
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
		const bodyFormData = new FormData(event.target);

		this.setState({loading: true, error: false});

		axios.post('https://politsturm.com/mail/index.php', bodyFormData, {
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.then((response) => {
				this.setState({sent: true, loading: false});
			})
			.catch((error) => {
				this.setState({error: true, loading: false});
			});
	}

	render() {
		const sectionClasses = classNames({
			[wrapper]: true
		})

		const {
			name,
			email,
			reason,
			sent,
			loading,
			error
		} = this.state;

		return (
			<div className={sectionClasses} id="join">
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
							{loading && (<span style={{marginTop: "40px"}}><CircularProgress color="secondary" /></span>)}
							{!sent && !loading ? (<Button style={{marginTop: "70px"}}>
								Вступить
							</Button>) : null}
							{sent && ((<div className={confirmedMessage}>Заявка отправлена</div>))}
							{error && ((<div className={errorMessage}>Что-то пошло не так</div>))}
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default JoinSection
