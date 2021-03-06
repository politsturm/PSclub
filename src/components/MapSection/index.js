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

		this.state = {
			placemarks: [
				{title: "МК в Екатеринбурге", link: "https://vk.com/ps_ekb", geometry: [56.838011, 60.597465]},
				{title: "МК в Иваново", link: "https://vk.com/politsturm_ivanovo", geometry: [57.000348, 40.973921]},
				{title: "МК в Иркутске", link: "https://vk.com/politsturm_irkutsk", geometry: [52.287054, 104.281047]},
				{title: "МК в Казани", link: "https://vk.com/politsturm_kazan", geometry: [55.796289, 49.108795]},
				{title: "МК в Санкт-Петербурге", link: "https://vk.com/politsturm_leningrad", geometry: [59.939095, 30.315868]},
				{title: "МК в Москве", link: "https://vk.com/politsturm_moscow", geometry: [55.755814, 37.617635]},
				{title: "МК в Нижнем Тагиле", link: "https://vk.com/ps_ntagil", geometry: [57.907605, 59.972211]},
				{title: "МК в Рязани", link: "https://vk.com/politsturm_ryazan", geometry: [54.629216, 39.736375]},
				{title: "МК в Ярославской области", link: "https://vk.com/politsturm_yaroslavia", geometry: [57.817361, 39.105138]},
				{title: "МК в Абакане", link: "https://vk.com/ps_abakan", geometry: [53.721152, 91.442387]},
				{title: "МК в Челябинске", link: "https://vk.com/ps_cheliabinsk", geometry: [55.159897, 61.402554]},
				{title: "МК в Перми", link: "https://vk.com/politsturm_perm", geometry: [58.010450, 56.229434]},
				{title: "МК в Барнауле", link: "https://vk.com/politsturm22", geometry: [53.346785, 83.776856]},
				{title: "МК в Чите", link: "https://vk.com/marxist_club_chita", geometry: [52.033635, 113.501049]},
				{title: "МК в Сыктывкаре", link: "https://vk.com/politsturm_syktyvkar", geometry: [61.668793, 50.836399]},
				{title: "МК в Тольятти", link: "https://vk.com/ps_tolyatti", geometry: [53.508800, 49.419180]},
				{title: "МК в Нижнем Новгороде", link: "https://vk.com/politsturm_nn", geometry: [56.326797, 44.006516]},
				{title: "МК в Калуге", link: "https://vk.com/ps_kaluga", geometry: [54.513845, 36.261215]}
			]
		};
	}

	render() {
		const sectionClasses = classNames({
			[wrapper]: true
		})

		const {placemarks} = this.state;


		return (
			<div className={sectionClasses} id="map">
				<h2>Карта</h2>
				<div style={{width: '100%'}}>
					<Map
						defaultState={{ center: [55.44, 65.34], zoom: 4 }}
						className={mapStyles}
					>
					{placemarks.map(({geometry, title, link}) => {
						return (
							<Placemark
								key={title}
								geometry={geometry}
								properties={{
									balloonContentHeader: title,
	            					balloonContentBody: `<a target="_blank" href="${link}">${link}</a>`,
	            					hintContent: title
								}}
								options={{
									iconColor: "red",
									preset: "islands#circleIcon"
								}}
								modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
							/>
						)
					})
					}
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
