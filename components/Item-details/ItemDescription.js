import { bullet } from "../../utils";
import CartReviewIngredients from "./Add-Rev-Ingr/CartReviewIngredients";

const ItemDescription = ({ product }) => {
  
  const { 0: data } = product;
  
  

  return (
    <div className="item-description">
      <div className="item-title">
        <h1 className="title-header">{data.title}</h1>
        <div className="line-through"></div>
      </div>
      
      <div className="item-desc">
        <h2 className="desc">{data.description}</h2>
      </div>
      <div className="item-subDesc">
        {data.subDescription.map((arr, i) => (
          <div key={i}>
            <h3 className="subDesc" key={i}>{bullet(arr)}</h3>
          </div>
        
        ))}
      </div>
      <div className="selectors">
          <CartReviewIngredients review={data.reviews} ingredients={data.ingredients} price={data.price}/>
      </div>
    </div>
  );
};

export default ItemDescription;
