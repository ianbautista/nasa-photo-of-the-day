import React from "react";
import Description from "./Description";

function Banner(props) {
	const { hdurl, title, explanation, date } = props;

	return (
		<div>
			<section className="banner">
				<img alt={title} src={hdurl} />
				<div className="caption">
					<Description explanation={explanation} title={title} date={date} />
				</div>
			</section>
		</div>
	);
}

export default Banner;
