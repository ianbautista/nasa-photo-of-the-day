import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { NASA_API_KEY, NASA_BASE_URL } from "./components/constants";
import Banner from "./components/Banner";

function App() {
	const [photoOfTheDay, setPhotoOfTheDay] = useState({});
	useEffect(() => {
		Axios.get(`${NASA_BASE_URL}?api_key=${NASA_API_KEY}`)
			.then((response) => {
				const photoObject = {
					hdurl: response.data.hdurl,
					explanation: response.data.explanation,
					date: response.data.date,
					title: response.data.title,
				};
				setPhotoOfTheDay(photoObject);
			})
			.catch((error) => {
				console.log(`Ooops! There's an Error. ${error}`);
			});
	}, []);

	return (
		<div className="App">
			{/* <img src="" /> */}
			<h1> PHOTO OF THE DAY </h1>
			<Banner photoOfTheDay={photoOfTheDay} />
		</div>
	);
}

export default App;
