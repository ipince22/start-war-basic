import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";

export const Planets = () => {
	return (
		<div className="text-center mt-5">
			<h1>Planets</h1>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
