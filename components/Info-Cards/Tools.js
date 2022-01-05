import Image from "next/image"
import Tool from "../../public/images/Tools.jpg"
const Tools = () => {
    return (
        <div className="category-card">
        <div className="category-card-insides">
        <Image
          className="face-card"
          src={Tool}
          alt="Picture of the author"
          width={340}
          height={510}
        /> 
        <div className="card-outline">
          <h1 className="card-outline-h1">
            Tools
          </h1>
        </div>
        </div>
        <div className="quote">
          <h1 className="quote-h1">Elevate Your Skincare Experience</h1>
          
        </div>
        <div className="mini-paragraph-section">
          <h2 className="phrase">Made By You</h2>
          <p className="mini-paragraph">
           We support our local creators. Have any local businesses you would like to see here? Please email us!
          </p>
        </div>
      </div>
    )
}

export default Tools;