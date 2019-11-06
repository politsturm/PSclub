import React, {Component} from "react"
import {Map, Placemark} from "react-yandex-maps"
import classNames from "classnames"
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper} = styleHelpers;
const {mapStyles} = styles;

class ProgrammSection extends Component {
	constructor(props) {
		super(props);

		const {center, zoom} = props;

		this.state = {};
	}

	render() {
		const sectionClasses = classNames({
			[wrapper]: true
		})

		return (
			<div className={sectionClasses}>
				<h2>Карта</h2>
				<div style={{width: '100%'}}>
					<Map
						defaultState={{ center: [55.75, 37.57], zoom: 9 }}
						className={mapStyles}
					>
						<Placemark
							geometry={[55.763338, 37.565466]}
							properties={{
								balloonContentHeader: "Московский кружок",
            					balloonContentBody: "Содержимое <em>кружка</em> метки",
            					balloonContentFooter: "Подвал",
            					hintContent: "Московский кружок"
							}}
							options={{
								iconColor: "red",
								preset: "islands#circleIcon"
							}}
							modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
						/>
					</Map>
				</div>
			</div>
		)
	}
}

ProgrammSection.defaultProps = {
	center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
}

export default ProgrammSection
