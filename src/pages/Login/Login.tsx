import "./Login.scss";
//types
import { place, FormattedPlace } from "../../types/places";
import { UserData } from "../../types/userData";
//
import { useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import axios from "axios";
import { GrClose } from "react-icons/gr";
//assets
import loginBack from "../../assets/svg/loginBack.svg";
//
const Login = (): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();

	useEffect(() => {
		const savedInfo = localStorage.getItem("data");

		if (savedInfo !== null) {
			navigate("/home");
		}
	});

	const API: string = process.env.REACT_APP_PLACE_API_KEY!;
	const placesArray: FormattedPlace[] = [];
	const name = localStorage.getItem("data");
	console.log(typeof name);
	//state upates
	const [fname, setfname] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [place, setPlace] = useState<FormattedPlace[]>([]);
	const [placeToggler, setPlaceToggler] = useState<boolean>(false);
	const [info, setInfo] = useState<FormattedPlace>();

	//get data
	const getData = () => {
		var config = {
			method: "get",
			url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&type=city&apiKey=${API}`,
			headers: {},
		};

		axios(config)
			.then((res) => {
				if (res.data.features.length > 0) {
					res.data.features.forEach((element: place) => {
						placesArray.push({
							readPlace: element.properties.formatted,
							coordinates: {
								lat: element.properties.lat,
								lon: element.properties.lon,
							},
							country: element.properties.country_code,
						});
					});
					setPlace(placesArray);
					setPlaceToggler(true);
				}
				if (res.data.features.length <= 0) {
					setPlaceToggler(false);
				}
			})
			.catch((err) => console.log(`error fetching data`, err));
	};
	//
	//handlers
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//* add login logic here!!
		const userInfo: UserData = {
			name: fname,
			place: location,
		};
		localStorage.setItem("data", JSON.stringify(userInfo));
		if (typeof info !== "undefined") {
			localStorage.setItem("info", JSON.stringify(info));
		}
		navigate("/home");
		setfname("");
		setLocation("");
	};
	const placeClickHandler = (
		e: React.MouseEvent<HTMLLIElement>,
		place: FormattedPlace
	) => {
		// console.log(place);
		const city = e.currentTarget.innerHTML;
		setLocation(city);
		setPlaceToggler(false);
		setInfo(place);
	};

	const placeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocation(e.target.value);
		getData();
	};
	const placeInputCloseHandler = (e: React.MouseEvent) => {
		setPlaceToggler(false);
	};

	//
	return (
		<div className="login">
			<div className="login_container">
				<div className="login_container--left">
					<h1 className="login_container--left_heading">Hello there ,</h1>
					<h2 className="login_container--left_subheading">
						Please enter your location to update yourself{" "}
					</h2>
				</div>
				<div className="login_container--middle">
					<img src={loginBack} alt="" />
				</div>
				<div className="login_container--right">
					<form
						onSubmit={handleSubmit}
						className="login_container--right_form"
						action=""
					>
						<div className="login_container--right_form_section">
							<label htmlFor="fullName">Fullname</label>
							<input
								type="text"
								name="fullName"
								id="fullName"
								value={fname}
								autoComplete="off"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setfname(e.target.value)
								}
								required
								placeholder="Please enter your full name..."
							/>
						</div>

						<div className="login_container--right_form_section">
							<label htmlFor="location">Location</label>
							<div className="login_container--right_form_section_input">
								<input
									type="location"
									name="location"
									id="location"
									required
									placeholder="Please enter your city name..."
									value={location}
									autoComplete="off"
									className="login_container--right_form_section_input"
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										placeInputHandler(e)
									}
								/>
								{placeToggler && (
									<GrClose
										className="login_container--right_form_section_icon"
										onClick={placeInputCloseHandler}
									/>
								)}
								{placeToggler && (
									<div className="login_container--right_form_section_autoresult">
										{place.map((place, index) => {
											return (
												<li
													key={index}
													className="login_container--right_form_section_autoresult_item"
													onClick={(e) => placeClickHandler(e, place)}
												>
													{`${place.readPlace} `}
												</li>
											);
										})}
									</div>
								)}
							</div>
						</div>
						<div className="login_container--right_form_section">
							<button type="submit">Update ME!</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Login;
