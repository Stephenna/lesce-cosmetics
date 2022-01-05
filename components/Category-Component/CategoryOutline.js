import { useEffect, useState } from "react";
import Image from "next/image";
import Face from "../../public/images/faceTest.jpg";

const CategoryOutline = ({
  border,
  // textStyle,
  width,
  height,
  picture,
  title,
}) => {
  const [link, setLink] = useState();

  useEffect(() => {
    setLink(picture);
  }, [picture]);

  const getPictureURL = () => {
    return picture.url;
  };
 

  return (
    <div className="categoryOutline-container">
      <Image
        loader={getPictureURL}
        className="holdOn"
        src={Face}
        alt="Picture of the author"
        width={width}
        height={height}
      /> 
      <div className="product-outline" style={border}>
        <h1 className="product-category" >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CategoryOutline;
