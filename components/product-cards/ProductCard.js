import Image from "next/image";
import Face from "../../public/images/faceTest.jpg";
import { dollar } from "../../utils";


const ProductCard = ({ border, width, height, title, price, key, thumbnail, ids }) => {

  const getPictureURL = () => {
    return thumbnail.url
  }


  return (
    <div className="product-card" key={ids} >
      <Image
        loader={getPictureURL}
        className="product-card-image"
        src={Face}
        alt="Picture of the author"
        width={width}
        height={height}
      />
      <div className="product-card-border" style={border}>
        <h1 className="product-header">{title.toUpperCase()}</h1>
        <h1 className="price">{dollar(price)}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
