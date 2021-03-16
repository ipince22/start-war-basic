import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Persons = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.peoples);

	return (
		<div className="text-center mt-5">
			<h1>Persons</h1>
			{store.peoples.map((item, i) => {
				return <li key={i}>{item.name}</li>;
			})}
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
