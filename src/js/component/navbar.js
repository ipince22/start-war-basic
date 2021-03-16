import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand h1  text-light">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-outline-light">Home</button>
				</Link>
			</div>
		</nav>
	);
};
