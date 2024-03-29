import "./Weather.scss";
import { useState, useEffect } from "react";
import axios from "axios";
//
//types
import { WeatherData } from "../../types/weatherData";
import { FormattedPlace } from "../../types/places";

const Weather = (): JSX.Element => {
	//


	//states

	const [weatherData, setWeatherData] = useState<WeatherData>();

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
			})
			.catch((e) => console.log(`error fetching weather`, e));
	};
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
					<span className="weather_container_body_image">
						<img
							src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
							alt=""
						/>
					</span>
				</p>
				<p className="weather_container_footer">
					<p className="weather_container_footer_description">
						{weatherData?.weather[0].main}
					</p>{" "}
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
