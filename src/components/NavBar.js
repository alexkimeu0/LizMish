import React from "react";
import logo from "../images/logo.png";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";

import "./NavBar.css";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="navbar__container">
				<div className="navbar__logo">
					<a href="">
						{" "}
						<img src={logo} />
					</a>
				</div>

				<ul>
					<li>
						<a href="">
							<span>
								<HomeIcon />
							</span>
							&nbsp; HOME
						</a>
					</li>
					<li>
						<a href="">
							<span>
								<InfoIcon />
							</span>
							&nbsp; ABOUT
						</a>
					</li>
					<li>
						<a href="">
							<span>
								<MailIcon />
							</span>
							&nbsp; CONTACT
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
