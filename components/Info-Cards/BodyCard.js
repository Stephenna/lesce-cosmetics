import Image from "next/image"
import Body from "../../public/images/bodyTest.jpg"
const BodyCard = () => {
    return (
        <div className="category-card">
        <div className="category-card-insides">
        <Image
          className="face-card"
          src={Body}
          alt="Picture of the author"
          width={340}
          height={510}
        /> 
        <div className="card-outline">
          <h1 className="card-outline-h1">
            Body
          </h1>
        </div>
        </div>
        <div className="quote">
          <h1 className="quote-h1">The Body Says What Words Cannot.  <br/>
          -Somebody</h1>
          
        </div>
        <div className="mini-paragraph-section">
          <h2 className="phrase">Made With You!</h2>
          <p className="mini-paragraph">
            We work closely with customers to improve our products. 
          </p>
        </div>
      </div>
    )
}

export default BodyCard
