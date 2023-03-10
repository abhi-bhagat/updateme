import "./Login.scss";
//
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Axios } from "axios";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

//assets
import loginBack from "../../assets/svg/loginBack.svg";
//
const Login = (): JSX.Element => {
	// const API: string = process.env.REACT_APP_PLACE_API_KEY!;
	// const autocomplete = new GeocoderAutocomplete(
	// 	document.getElementById("#myAuto")!,
	// 	API
	// );

	const navigate: NavigateFunction = useNavigate();

	//handlers
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//* add login logic here!!
		navigate("/home");
		setfname("");
		setEmail("");
		setLocation("");
	};
	const placeClickHandler = (e: React.PointerEvent<HTMLLIElement>) => {
		console.log(e.currentTarget.innerHTML);
	};
	//state upates
	const [fname, setfname] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [location, setLocation] = useState<string>("");
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
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setfname(e.target.value)
								}
								required
								placeholder="Please enter your full name..."
							/>
						</div>

						<div className="login_container--right_form_section" id="myAuto">
							<label htmlFor="location">Location</label>
							<input
								type="location"
								name="location"
								id="location"
								required
								placeholder="Please enter your location..."
								value={location}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setLocation(e.target.value)
								}
							/>
							<div className="login_container--right_form_section_autoresult">
								<li
									className="login_container--right_form_section_autoresult_item"
									onClick={placeClickHandler}
								>
									abhi
								</li>
								<li className="login_container--right_form_section_autoresult_item">
									abhi
								</li>
								<li className="login_container--right_form_section_autoresult_item">
									abhi
								</li>
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
