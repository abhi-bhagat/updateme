import Navbar from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./Home.scss";

const Home = (): JSX.Element => {
	return (
		<>
			<Navbar />

			<div className="homepage">
				<div className="homepage-container">
					<div className="homepage-container_sidebar">
						<div className="homepage-container_quote">
							<Quote />
						</div>
						<div className="homepage-container_tags">
							<li>∂ tags</li>
							<li>∂ tags</li>
							<li>∂ tags</li>
						</div>
					</div>
					<div className="homepage-container_news">
						<NewsCard date={""} image="" heading="" content="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
