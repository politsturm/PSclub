import React from "react"
import GoogleMapReact from 'google-map-react';
import classNames from "classnames"
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper} = styleHelpers;
const {mapStyles} = styles;

const ProgrammSection = ({center, zoom}) => {
	const sectionClasses = classNames({
		[wrapper]: true
	})

	return (
		<div className={sectionClasses}>
			<h2>Карта</h2>
			<div className={mapStyles}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyBBXqiXM0Uz6IMSDBSHKhTvojkJN09NX0g" }}
					defaultCenter={center}
					defaultZoom={zoom}
				/>
			</div>
		</div>
	)
}

ProgrammSection.defaultProps = {
	center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
}

export default ProgrammSection
