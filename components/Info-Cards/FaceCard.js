import Image from "next/image";
import Face from "../../public/images/faceTest.jpg";

const FaceCard = () => {
  return (
    <div className="category-card">
      <div className="category-card-insides">
      <Image
        className="face-card"
        src={Face}
        alt="Picture of the author"
        width={340}
        height={510}
      /> 
      <div className="card-outline">
        <h1 className="card-outline-h1">
          Face
        </h1>
      </div>
      </div>
      <div className="quote">
        <h1 className="quote-h1">You Serve Face, We Cook the Product!</h1>
      </div>
      <div className="mini-paragraph-section">
        <h2 className="phrase">Made For You!</h2>
        <p className="mini-paragraph">
          Our products are made for you, not animals. If we have to test on
          animals to ensure its safe for you skin, it probably wasnt a good idea
          from the jump. We use clean ingredients to keep you happy and animals
          safe
        </p>
      </div>
    </div>
  );
};

export default FaceCard;
