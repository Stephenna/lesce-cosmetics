import Image from "next/image"
import Onsale from "../../public/images/onSale.jpg"
const OnSale = () => {
  return (
    <div>
      <div className="category-card">
        <div className="category-card-insides">
          <Image
            className="face-card"
            src={Onsale}
            alt="Picture of the author"
            width={340}
            height={510}
            
          />
          <div className="card-outline"style={{marginTop: 100}}>
            <h1 className="card-outline-h1">On sale</h1>
          </div>
        </div>
        <div className="quote">
          <h1 className="quote-h1">
           Get it While it Last!
          </h1>
        </div>
        {/* <div className="mini-paragraph-section">
          <h2 className="phrase">Made With You!</h2>
          <p className="mini-paragraph">
            We work closely with customers to improve our products.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default OnSale;
