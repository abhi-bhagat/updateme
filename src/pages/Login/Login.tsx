import "./Login.scss";
//
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
const Login = (): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();

	//
	//handlers
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//* add login logic here!!
		navigate("/home");
		setfname("");
		setEmail("");
		setLocation("");
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
						Please login/signup to update yourself{" "}
					</h2>
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
						<div className="login_container--right_form_section">
							<label htmlFor="email">email</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Please enter your email..."
								value={email}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setEmail(e.target.value)
								}
							/>
						</div>
						<div className="login_container--right_form_section">
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
