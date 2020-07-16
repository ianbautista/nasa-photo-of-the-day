import React from "react";
import "../App.css";
import Description from "./Description";

function Banner(props) {
	console.log(props);
	const { hdurl, title, explanation, date } = props.photoOfTheDay;

	return (
		<div className="banner">
			<section className="imgContainer">
				<img alt={title} src={hdurl} />
			</section>
			<div className="description">
				<Description explanation={explanation} title={title} date={date} />
			</div>
		</div>
	);
}

export default Banner;
