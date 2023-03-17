import "./Weather.scss";
import { useState, useEffect } from "react";
import axios from "axios";
//
//types
import { WeatherData } from "../../types/weatherData";
import { UserData } from "../../types/userData";
import { FormattedPlace } from "../../types/places";

const Weather = (): JSX.Element => {
	//
	console.log(`i am test`, typeof localStorage.getItem("info"));

	//states
	const [temperature, setTemperature] = useState<number>();
	const [weatherDescription, setWeatherDescription] = useState<string>();
	const [min, setMin] = useState<number>(0);
	const [max, setMax] = useState<number>(0);
	// const [info, setInfo] = useState<FormattedPlace>();
	const [weatherData, setWeatherData] = useState<WeatherData>();
	// //vars
	// const lat: number = 0;
	// const lon: number = 0;
	const WEATHER_API_KEY: string = process.env.REACT_APP_WEATHER_API_KEY!;
	const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`;
	const info: FormattedPlace = JSON.parse(localStorage.getItem("info")!);
	//

	//methods

	const getWeatherData = (): void => {
		axios
			.get(
				`${WEATHER_URL}lat=${info.coordinates.lat}&lon=${info.coordinates.lon}&units=metric&appid=${WEATHER_API_KEY}`
			)
			.then((res) => {
				setWeatherData(res.data);
				setTemperature(res.data.main.temp);
			})
			.catch((e) => console.log(`error fetching weather`, e));
	};

	const getInfo = () => {};
	//

	useEffect(() => {
		getWeatherData();
	}, []);

	return (
		<div className="weather">
			<div className="weather_container">
				<h2 className="weather_container_title">{weatherData?.name}</h2>
				<p className="weather_container_body">
					<span className="weather_container_body_digits">
						{weatherData?.main.temp}°C
					</span>{" "}
					<img
						src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
						alt=""
					/>
				</p>
				<p className="weather_container_footer">
					<div className="weather_container_footer_description">
						{weatherData?.weather[0].description}
					</div>{" "}
					<span className="weather_container_footer_high">
						H:{weatherData?.main.temp_max}
					</span>
					<span className="weather_container_footer_low">
						{" "}
						L:{weatherData?.main.temp_min}
					</span>
				</p>
			</div>
		</div>
	);
};

export default Weather;
