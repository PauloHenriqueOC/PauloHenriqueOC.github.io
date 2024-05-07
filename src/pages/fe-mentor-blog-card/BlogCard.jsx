import "./BlogCard.css";

import blogImg from "../../assets/blog-preview/illustration-article.svg"
import Content from "./components/Content";
import Profile from "./components/Profile";

const BlogCard = () => {
	return (
		<div className="root-card-container">
			<div className="card-container">
				<img className="image-container" src={blogImg} alt="" />
				<Content />
				<Profile />
			</div>
		</div>
	);
};

export default BlogCard;
