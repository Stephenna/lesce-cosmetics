import { useState, useRef } from "react";
import { averageVal } from "../../../utils";
import Cart from "./Cart";
import Reviews from "./Reviews";
import Ingredients from "./Ingredients";
import StarIcon from '@mui/icons-material/Star';
const CartReviewIngredients = ({ review, ingredients, price }) => {
  const [displayAddCart, setDisplayAddCart] = useState(true);
  const [displayReviews, setDisplayReviews] = useState(false);
  const [displayIngredients, setDisplayIngredients] = useState(false);
  const cartRef = useRef();

  let allStars = []
  const getAverageStars = () => {
    review.map(review => {
      allStars.push(review.stars);
    })
  }
  getAverageStars()
 

  const handleClick = (value) => {
   
    if (value === "cart") {
      setDisplayAddCart(true);
      setDisplayReviews(false);
      setDisplayIngredients(false);
    } else if (value === "review") {
      setDisplayAddCart(false);
      setDisplayReviews(true);
      setDisplayIngredients(false);
    } else if (value === "ingredients") {
      setDisplayAddCart(false);
      setDisplayReviews(false);
      setDisplayIngredients(true);
    }
  };
  return (
    <div className="cri-container">
      <div className="cri-body">
        <button onClick={() => handleClick("cart")}>
          <div className="cart" ref={cartRef}>
            <h2>Add to Cart</h2>
          </div>
        </button>
        <div className="spacer"></div>
        <button onClick={() => handleClick("review")}>
          <div className="review">
            <h2>Reviews {averageVal(allStars)}<StarIcon style={{color: "gold", width: 25, height: 15, }}/></h2>
          </div>
        </button>
        <div className="spacer"></div>
        <button onClick={() => handleClick("ingredients")}>
          <div className="ingredients">
            <h2>Ingredients</h2>
          </div>
        </button>
      </div>
      <div className="buttons">
        {displayAddCart && <Cart price={price}/>}
        <div className="all-reviews">
          {displayReviews && (
            <div className="all-reviews">
             { review.map((review) => (
              <Reviews
                key={review.createdAt}
                name={review.name}
                title={review.title}
                reviewBody={review.reviewBody}
                stars={review.stars}
                img={review.profileImage}
                average={allStars}
              />
              ))}
            </div>
          )}
        </div>

        {displayIngredients && 
        <div className="ingredientsssss">
          {<Ingredients ingredients={ingredients} />}
        </div>
        }
      </div>
    </div>
  );
};

export default CartReviewIngredients;
