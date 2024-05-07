import "./SocialLinks.css";
import profileImg from "../../assets/social-links/avatar-jessica.jpeg"
import CircleProfileImg from "./components/CircleProfileImg";
import Links from "./components/Links";
import NameLocation from "./components/NameLocation";
import ShortBio from "./components/ShortBio";

const SocialLinks = () => {
	const social = getSocial();

	return (
		<div className="root-links-container">
			<div className="main-social-container">
				<CircleProfileImg profileImg={social.photo} />
				<NameLocation name={social.name} location={social.location} />
				<ShortBio bioDescription={social.bio} />
                <Links links={ social.links }/>
			</div>
		</div>
	);
};

{ /* SImulates a object that contains all profile informations */}
function getSocial() {
	return {
		photo: profileImg,
		name: "Jessica Randall",
		location: "London, United Kingdom",
		bio: '"Front-end developer and avid reader."',
		links: [
			{ name: "GitHub", url: "" },
			{ name: "Frontend Mentor", url: "" },
			{ name: "Linkedin", url: "" },
			{ name: "Twitter", url: "" },
			{ name: "Instagram", url: "" },
		],
	};
}

export default SocialLinks;
