import React from "react";

const Links = ({ links }) => {
	return (
		<div className="link-container">
			{links.map((linkObj) => (
				<a href={linkObj.url}>{linkObj.name}</a>
			))}
		</div>
	);
};

export default Links;
