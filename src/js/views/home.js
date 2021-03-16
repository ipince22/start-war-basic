import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container text-center mt-5 bg-dark">
		<div className="row ">
			<div className="col-md-6 d-flex justify-content-center">
				<Link to="/persons">
					<img
						className="d-block"
						src="https://www.projectcasting.com/wp-content/uploads/2018/09/star-wars-696x400.jpg"
						alt="People"
					/>
				</Link>
			</div>
			<div className="col-md-6 d-flex justify-content-center">
				<Link to="/planets">
					<img
						className="d-block"
						src="https://lighthouse.mq.edu.au/__data/assets/image/0008/647846/solar-system700x400.jpg"
						alt="Planets"
					/>
				</Link>
			</div>
		</div>
	</div>
);
