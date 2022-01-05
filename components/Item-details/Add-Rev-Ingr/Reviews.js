import { averageVal } from "../../../utils";
import SelectedImage from "../SelectedImage";
import StarIcon from '@mui/icons-material/Star';
const Reviews = ({ name, title, reviewBody, stars, img, average }) => {
    

  return (
    <div className="reviews-container">
      <div className="review-img">
        <SelectedImage
          sub={img.url}
          width={115}
          height={115}
          name={"reviewer-img"}
        />
        <div className="reviewer-img-outline"></div>
      </div>
      <div className="add-spac"></div>
      <div className="reviews-body">
        <div className="review-title">
          <h1>{title}</h1>
        </div>
        <div className="reviewer-name-stars">
          <h4>{name}</h4>
          <div className="review-spacer" style={{border: "1px solid white", height: 20, marginLeft: 15}}></div>
          <p className="p-stars">{Array(stars).fill(<StarIcon style={{color: "gold", width: 20,}}/>)}</p>
          <p className="average">({stars}/5)</p>
        </div>
        <p className="review-text">{reviewBody}</p>
      </div>
    </div>
  );
};

export default Reviews;
