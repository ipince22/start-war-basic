import React, { useState, useRef, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Persons = () => {
	const { store } = useContext(Context);
	const [searchPeople, setSearchPeople] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className="container">
			<div className="container mt-3">
				<input
					ref={inputRef}
					onChange={event => {
						setSearchPeople(event.target.value);
					}}
					type="text"
					className="form-control"
					placeholder="Search people..."
					aria-label="Search People"
					name="SearchPeople"
					id="SearchPeople"
				/>
			</div>

			<div className="card-deck">
				{store.peoples
					.filter(value => {
						if (searchPeople === "") {
							return value;
						} else if (value.name.toLowerCase().includes(searchPeople.toLowerCase())) {
							return value;
						}
					})
					.map((item, index) => {
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
