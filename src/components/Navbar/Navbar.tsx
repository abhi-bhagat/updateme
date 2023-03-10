import "./Navbar.scss";
import logoImage from "../../assets/images/logo.png";

import { useState } from "react";
import { getDate } from "../../utils/getDate";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
const Navbar = (): JSX.Element => {
	const navigate = useNavigate();
	const [open, setOpen] = useState<boolean>(false);
	//handlers

	const logoClickHandler = (e: React.MouseEvent) => {
		navigate("/home");
	};
	const weatherClickHandler = (e: React.MouseEvent) => {
		navigate("/weather");
	};
	const hamburgerHandler = (e: React.MouseEvent) => {
		setOpen(!open);
	};
	return (
		<div className="navbar">
			<div className="navbar_container">
				<div className="navbar_container_left">
					<img src={logoImage} alt="" onClick={logoClickHandler} />
				</div>
				<div className="navbar_container_middle">
					<h3 className="navbar_container_middle_city">CITYNAME</h3>
					<p className="navbar_container_middle_date">{getDate()}</p>
				</div>
				<div className="navbar_container_right">
					<div
						className="navbar_container_right--mobile"
						onClick={hamburgerHandler}
					>
						<Hamburger color="white" toggled={open} toggle={setOpen} />

						{open && (
							<div className="navbar_container_right--mobile_list-container">
								<ul className="navbar_container_right--mobile_list-container_list">
									<li
										onClick={logoClickHandler}
										className="navbar_container_right--mobile_list-container_list_listitem"
									>
										news
									</li>

									<li
										onClick={weatherClickHandler}
										className="navbar_container_right--mobile_list-container_list_listitem"
									>
										weather
									</li>
								</ul>
							</div>
						)}
					</div>
					<div className="navbar_container_right--tablet">
						<ul className="navbar_container_right--tablet-list">
							<li className="navbar_container_right--tablet-list_listitem" onClick={logoClickHandler}>
								news
							</li>

							<li className="navbar_container_right--tablet-list_listitem" onClick={weatherClickHandler}>
								weather
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
