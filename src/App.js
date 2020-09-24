import React from "react";
import Post from "./components/Post";
import About from "./components/About";
import Contact from "./components/Contact";

import logo from "./images/logo.png";

import { BrowserRouter as Router, Route, Switch, a } from "react-router-dom";

import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<div className="navbar">
				<div className="navbar__container">
					<div className="navbar__logo">
						<a to="/">
							{" "}
							<img src={logo} />
						</a>
					</div>

					<ul>
						<li>
							<a to="/">HOME</a>
						</li>
						<li>
							<a to="/about">ABOUT</a>
						</li>
						<li>
							<a to="/contact">CONTACT</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="app">
				<div className="container">
					<div className="app__container">
						{/* <Router>
							<Switch>
								<Route path="/" component={Post} />
								<Route path="/about" component={About} />
								<Route path="/contact" component={Contact} />
							</Switch>
						</Router> */}

						{/* <About /> */}
						{/* <Post /> */}
						<Contact />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
