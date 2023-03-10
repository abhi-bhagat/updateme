import Navbar from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";
import "./Home.scss";

const Home = (): JSX.Element => {
	return (
		<>
			<Navbar />

			<div className="homepage">
				<div className="homepage-container">
					<Quote />
				</div>
			</div>
		</>
	);
};

export default Home;
