import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { NASA_API_KEY, NASA_BASE_URL } from "./components/constants";
import Banner from "./components/Banner";
import Mars from "./components/Mars";
import NASALogo from "./nasalogo.png";
console.log(Banner);
function App() {
	const [photoOfTheDay, setPhotoOfTheDay] = useState({});
	console.log(photoOfTheDay);
	useEffect(() => {
		Axios.get(`${NASA_BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}`)
			.then((response) => {
				console.log(response);
				const photoObject = {
					hdurl: response.data.hdurl,
					explanation: response.data.explanation,
					date: response.data.date,
					title: response.data.title,
				};
				console.log(photoOfTheDay);
				setPhotoOfTheDay(photoObject);
			})
			.catch((error) => {
				console.log(`Ooops! There's an Error. ${error}`);
			});
	}, []);
	const [marsPhoto, setMarsPhoto] = useState("");
	useEffect(() => {
		Axios.get(
			`${NASA_BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`,
		)
			.then((response) => {
				console.log(response);
				let marsArrayLength = response.data.photos.length;
				console.log(marsArrayLength);
				let randomized = Math.floor(Math.random() * (marsArrayLength + 1));
				console.log(randomized);
				const marsPhotoObject = {
					imgSrc: response.data.photos[randomized].img_src,
					earthDate: response.data.photos[randomized].earth_date,
				};
				setMarsPhoto(marsPhotoObject);
			})
			.catch((error) => {
				console.log(`Ooops! There's an Error. ${error}`);
			});
	}, []);

	console.log(photoOfTheDay);
	return (
		<div className="App">
			<img className="nasalogo" src={NASALogo} alt="NASA Logo" />
			<h1> PHOTO OF THE DAY </h1>
			<Banner photoOfTheDay={photoOfTheDay} setPhotoOfTheDay={setPhotoOfTheDay} />
			{/* {console.log(photoOfTheDay)} */}
			<Mars marsPhoto={marsPhoto} setMarsPhoto={setMarsPhoto} />
		</div>
	);
}
export default App;
