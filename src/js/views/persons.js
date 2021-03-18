import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Persons = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<div className="card-deck">
				{store.peoples.map((item, index) => {
					return (
						<div className="col-md-4" key={index}>
							<Card
								key={index}
								nombre={item.name}
								var1={"Height: " + item.height}
								var2={"Eye color: " + item.eye_color}
								var3={"Hair color: " + item.hair_color}
								id={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
