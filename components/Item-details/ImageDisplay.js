import { useState, useEffect } from "react";
import SelectedImage from "./SelectedImage";
import { border } from "./imageCSS";

const ImageDisplay = ({ subImages}) => {
  const [imageSelected, setImageSelected] = useState();

  useEffect(() => {
    subImages.map((image) => {
      // we mapped over images to set setImageSelected to return the last image in the subImages.
      setImageSelected(image.url);
    });
  }, [subImages]);
 

  return (
    <div className="image-display">
      {}
      <SelectedImage
        width={400}
        height={600}
        main={imageSelected}
        name={"selected-image"}
      />
      <div className="image-display-border" style={border()}>
        <div className="sub-images">
          {subImages.map((img) => (
            <button
              key={img.id}
              onClick={() => {
                setImageSelected(img.url);
              }}
            >
              <div className="img" key={img.id}>
                <SelectedImage
                  sub={img.url}
                  width={100}
                  height={100}
                  name={"sub-images"}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
