import Navbar from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./Home.scss";
import axios from "axios";
import { useEffect } from "react";

const Home = (): JSX.Element => {
	const API: string = process.env.REACT_APP_NEWS_API_KEY!;
	console.log(API);
	
	const URL: string = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=5&apikey=${API}`;

	//useEffect
	useEffect(() => {
		getData();
	}, []);

	//handlers
	const getData = () => {
		axios
			.get(URL)
			.then((res) => {
				console.log(res.data);
			})
			.catch((e) => console.log(`Error fetching news`, e));
	};

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
