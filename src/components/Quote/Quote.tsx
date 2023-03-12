import "./Quote.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Quote = (): JSX.Element => {
	//type
	interface QuoteType {
		_id: string;
		content: string;
		author: string;
		tags: string[];
		authorSlug: string;
		length: number;
		dateAdded: string;
		dateModified: string;
	}

	const [myData, setMyData] = useState<QuoteType>();
	const quoteURL: string = `https://api.quotable.io/random`;
	//method
	const getQuote = () => {
		axios
			.get<QuoteType>(quoteURL)
			.then((res) => {
				setMyData(res.data);
			})
			.catch((e) => {
				console.log(`Error fetching quotes`, e);
				return e;
			});
	};
	useEffect(() => {
		getQuote();
	}, []);

	// useEffect(() => {
	// 	const myInterval = setInterval(() => {
	// 		getQuote();
	// 	}, 5000);

	// 	return () => {
	// 		clearInterval(myInterval);
	// 	};
	// }, []);

	return (
		<div className="quote-container">
			<h2>Quote :</h2>
			{myData && <p>{myData.content}</p>}

			{myData && <h3>{myData.author}</h3>}
		</div>
	);
};

export default Quote;
