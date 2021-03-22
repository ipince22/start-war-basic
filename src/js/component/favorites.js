import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Favorites() {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);
	let contador = store.favorites.length;

	return (
		<div className="form-group">
			<label>Select list:</label>
			<select className="form-control" id="sel1">
				{store.favorites.map((item, index) => {
					return <option key={index}>{item}</option>;
				})}
			</select>
		</div>
	);
}
