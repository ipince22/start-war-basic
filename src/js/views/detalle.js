import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Detalle = () => {
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			{store.peoples.map((item, index) => {
				if (id == index) {
					return <h1 className="text-light">{item.name}</h1>;
				}
			})}

			<Link to="/persons">go back</Link>
		</div>
	);
};
