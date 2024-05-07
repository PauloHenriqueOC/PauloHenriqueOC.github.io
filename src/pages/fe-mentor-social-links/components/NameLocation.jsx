import React from "react";

const NameLocation = ({ name, location}) => {
	return (
		<div className="name-location-container">
			<h3 className="social-name">{ name }</h3>
            <p className="social-location">{ location }</p>
		</div>
	);
};

export default NameLocation;
