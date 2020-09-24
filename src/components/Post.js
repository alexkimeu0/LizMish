import React from "react";
import "./Post.css";

import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import postImage from "../images/liz.jpg";

const Post = () => {
	return (
		<div className="post">
			<a href="">
				<div className="post__card">
					<div className="post__cardHeader">
						<h2>Let's End It</h2>
						<p className="content">
							I feel ashamed for all the parts of me I let you see, That our
							loss was feeding into fears and insecurities...
						</p>
						<div className="date">
							{" "}
							<p> September 2, 2020</p>
						</div>
					</div>

					<div className="post__cardBody">
						<img src={postImage} loading="lazy" alt="title" />
					</div>

					<div className="post__cardFooter">
						<IconButton>
							<FavoriteBorderIcon />
						</IconButton>
						<IconButton>
							<ChatOutlinedIcon />
						</IconButton>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Post;
