import "./Navbar.scss";
import logoImage from "../../assets/images/logo.png";
//types
import { UserData } from "../../types/userData";

//
import { useEffect, useState } from "react";
import { getDate } from "../../utils/getDate";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";

// icons
import { GrSettingsOption, GrLogout, GrLocationPin } from "react-icons/gr";
import { userInfo } from "os";

const Navbar = (): JSX.Element => {
	const navigate = useNavigate();
	const user: UserData = JSON.parse(localStorage.getItem("data")!);
	const [open, setOpen] = useState<boolean>(false);
	const [city, setCity] = useState<string>("");
	const [showSettings, setShowSettings] = useState<boolean>(false);

	//useEffect
	useEffect(() => {
		const localInfo = localStorage.getItem("data");
		if (localInfo !== null) {
			const savedInfo: UserData = JSON.parse(localInfo);
			setCity(savedInfo.place);
		}
	}, []);
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
	const settingClickHandler = (e: React.MouseEvent): void => {
		setShowSettings(!showSettings);
	};
	const logoutHandler = (e: React.MouseEvent): void => {
		localStorage.removeItem("data");
		localStorage.removeItem("coordinates");
		localStorage.removeItem("info");

		navigate("/");
	};
	return (
		<div className="navbar">
			<div className="navbar_container">
				<div className="navbar_container_left">
					<img src={logoImage} alt="" onClick={logoClickHandler} />
				</div>
				<div className="navbar_container_middle">
					<h3 className="navbar_container_middle_city">{city}</h3>
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
									<li className="navbar_container_right--mobile_list-container_list_listitem">
										Change Location
									</li>
									<li
										className="navbar_container_right--mobile_list-container_list_listitem"
										onClick={logoutHandler}
									>
										Logout
									</li>
								</ul>
							</div>
						)}
					</div>
					<div className="navbar_container_right--tablet">
						<ul className="navbar_container_right--tablet-list">
							{/* <li
								className="navbar_container_right--tablet-list_listitem"
								onClick={logoClickHandler}
							>
								news
							</li>

							<li
								className="navbar_container_right--tablet-list_listitem"
								onClick={weatherClickHandler}
							>
								weather
							</li> */}
							Hi, {user.name}
							<li
								className="navbar_container_right--tablet-list_listitem"
								onClick={settingClickHandler}
							>
								<GrSettingsOption
									color={"white"}
									className="navbar_container_right--tablet-list_listitem_setting-icon"
								/>
							</li>
						</ul>
						{showSettings && (
							<div className="navbar_container_right--tablet_settings">
								<div className="navbar_container_right--tablet_settings_triangle"></div>
								<ul>
									<li className="navbar_container_right--tablet_settings_list-item">
										<GrLocationPin className="navbar_container_right--tablet_settings_list-item_icon" />
										change location
									</li>

									<li
										className="navbar_container_right--tablet_settings_list-item"
										onClick={logoutHandler}
									>
										<GrLogout className="navbar_container_right--tablet_settings_list-item_icon" />
										logout
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
