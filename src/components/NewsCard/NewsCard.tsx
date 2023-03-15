import "./NewsCard.scss";
import testImg from "../../assets/images/logo.png";

type NewsDataType = {
	date: string;
	image: string;
	heading: string;
	content: string;
};
const NewsCard = ({
	date,
	image,
	heading,
	content,
}: NewsDataType): JSX.Element => {
	return (
		<div className="news-card">
			<div className="news-card_image">
				<img src={image} alt="" />
			</div>
			<div className="news-card_body">
				<div className="news-card__body_title">
					<h3 className="news-card_body_title_heading">{heading}</h3>
				</div>
				<div className="news-card_body_content">{content}</div>
			</div>
		</div>
	);
};

export default NewsCard;
