import React from "react";

const Links = ({ links }) => {
	return (
		<div className="link-container">
			<ul>
				{links.map((linkObj) => (
					<li>
						<a href={linkObj.url}>{linkObj.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Links;
