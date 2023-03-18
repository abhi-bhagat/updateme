import Navbar from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";
import NewsCard from "../../components/NewsCard/NewsCard";
import Weather from "../../components/Weather/Weather";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
//types
import { NewsDataType } from "../../types/newsData";
import { FormattedPlace } from "../../types/places";
//
//utils
// import { getDate } from "../../utils/getDate";
import { Link } from "react-router-dom";
//
// data
import tempNews from "../../data/temp.json";
//
const Home = (): JSX.Element => {
	//get Country
	const info: FormattedPlace = JSON.parse(localStorage.getItem("info")!);
	const API: string = process.env.REACT_APP_NEWS_API_KEY!;
	const URL: string = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=${info.country}&max=5&apikey=${API}`;
	//states
	const [news, setNews] = useState<NewsDataType[]>([]);
	const [updatedNewsError, setUpdatedNewsError] = useState<boolean>(false);
	// const [date, setDate] = useState<string>("")!;
	// const [tempData, setTempData] = useState<NewsDataType[]>([]);
	//handlers
	const getData = () => {
		// setDate(getDate());
		axios
			.get(URL)
			.then((res) => {
				if (res.data.length <= 0) {
					setNews([]);
				} else {
					setNews(res.data.articles);
					setUpdatedNewsError(false);
				}
			})
			.catch((e) => {
				console.log(`Error fetching news`);
				setUpdatedNewsError(true);
				setNews(tempNews.articles);
			});
	};
	//useEffect
	useEffect(() => {
		getData();
	}, []);
	//useEffect daily

	return (
		<>
			<Navbar />

			<div className="homepage">
				{updatedNewsError && (
					<div className="homepage--fallback">
						<p>
							NOTE: Due to limited number of requests that we can make to our
							API per day, we are showing the pre-saved news. Please check back
							for updated news
						</p>
					</div>
				)}
				<div className="homepage-container">
					<div className="homepage-container_sidebar">
						<div className="homepage-container_sidebar_quote">
							<Quote />
						</div>
						<div className="homepage-container_sidebar_weather">
							<Weather />
						</div>
						{/* <div className="homepage-container_tags">
							<li>∂ tags</li>
							<li>∂ tags</li>
							<li>∂ tags</li>
						</div> */}
					</div>

					<div className="homepage-container_news">
						<h2 className="homepage-container_news_title">Top News</h2>
						{news.map((news) => {
							return (
								<Link key={news.url} to={`${news.url}`}>
									<NewsCard
										date={news.publishedAt}
										image={news.image}
										heading={news.title}
										content={news.description}
									/>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
