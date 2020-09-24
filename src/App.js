import React from "react";
import NavBar from "./components/NavBar";
import Post from "./components/Post";

import "./App.css";

const App = () => {
	return (
		<div className="app">
			<NavBar />
			<div className="container">
				<div className="app__container">
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
};

export default App;
