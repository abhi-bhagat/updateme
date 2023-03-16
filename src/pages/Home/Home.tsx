import Navbar from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
//types
import { NewsDataType } from "../../types/newsData";
//
//utils
// import { getDate } from "../../utils/getDate";
import { Link } from "react-router-dom";
//
// data
import tempNews from "../../data/temp.json";
//
const Home = (): JSX.Element => {
	const API: string = process.env.REACT_APP_NEWS_API_KEY!;
	const URL: string = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=5&apikey=${API}`;
	//states
	const [news, setNews] = useState<NewsDataType[]>([]);
	const [updatedNews, setUpdatedNews] = useState<boolean>(false);
	// const [date, setDate] = useState<string>()!;
	//handlers
	const getData = () => {
		axios
			.get(URL)
			.then((res) => {
				// setDate(getDate());
				console.log(res.data.articles);
				if (res.data.length <= 0) {
					setNews([]);
				} else {
					setNews(res.data.articles);
					setUpdatedNews(false);
				}
			})
			.catch((e) => {
				console.log(`Error fetching news`);
				setUpdatedNews(true);
				setNews(tempNews.articles);
			});
	};
	//useEffect
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Navbar />

			<div className="homepage">
				{updatedNews && (
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
