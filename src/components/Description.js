import React from "react";

function Description(props) {
	const { explanation, title, date } = props;

	return (
		<div>
			<h2>{title}</h2>
			<h4>{date}</h4>
			<p>{explanation}</p>
		</div>
	);
}

export default Description;
