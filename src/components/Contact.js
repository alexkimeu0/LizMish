import React from "react";

import "./Contact.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { IconButton } from "@material-ui/core";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__container">
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>

				<div className="contact__icons">
					<IconButton>
						<MailOutlineIcon />
					</IconButton>
					<IconButton>
						<FacebookIcon />
					</IconButton>
					<IconButton>
						<InstagramIcon />
					</IconButton>

					<IconButton>
						<TwitterIcon />
					</IconButton>

					<IconButton>
						<LinkedInIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Contact;
