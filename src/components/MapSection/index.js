import React from "react"
import GoogleMapReact from 'google-map-react';
import classNames from "classnames"
import styleHelpers from "../helpers.module.css"

const {wrapper} = styleHelpers;

const ProgrammSection = ({center, zoom}) => {
	const sectionClasses = classNames({
		[wrapper]: true
	})

	return (
		<div className={sectionClasses} style={{marginTop: "250px"}}>
			<h2>Карта</h2>
			<div style={{ height: '621px', width: '100%', borderRadius: '20px', marginTop: "80px"}}>
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
