import React from "react";
import "../App.css";

function Mars(props) {
	console.log(props);
	const { imgSrc, earthDate } = props.marsPhoto;

	return (
		<div className="banner">
			<h1>Mars Photo</h1>
			<section className="imgContainer">
				<img className="nasaImages" alt={earthDate} src={imgSrc} />
			</section>
			<h2> {earthDate} </h2>
		</div>
	);
}

export default Mars;
