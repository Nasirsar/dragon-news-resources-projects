import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
const NewsCard = ({news}) => {
    const{title,details,image_url ,_id}=news;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-details">
                    {
                    details.length >200 ? <p>{details.slice(0,200)} <br />
                     <Link to={`/news/${_id}`} className="text-amber-400 font-bold"> Read more...</Link>
                     </p>
                    :<p>{details}</p>
                    }
                    </p>

            </div>
        </div>
    );
};

export default NewsCard;
NewsCard.propTypes={
    news:PropTypes.object
}