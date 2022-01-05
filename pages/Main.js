import RightNav from "../components/NavBars/RightNav";
import LeftNav from "../components/NavBars/LeftNav";
import Image from "next/image";
import mainmaybe from "../public/images/mainmaybe.jpg";
import bottom from "../public/images/main-bottom-right.jpg";
import Fade from "react-reveal/Fade";
import {
  rBackground,
  rText,
  lText,
  lBackground,
  blackCart
} from "../components/NavBars/BlackStyling.js";
import { useState } from "react";

const Main = () => {

  const [itemizedCart, setItemizedCart] = useState([])

  return (
    <div className="container main">
      <LeftNav
        background={lBackground()}
        text={lText()}
        words={"SHOP"}
        index={1}
      />

      <div className="main-center">
        <div className="main-center-top">
          <div className="top-container-left">
            <Image
              className="mainMaybe"
              src={mainmaybe}
              alt="Picture of the author"
              width={270}
              height={370}
            />

            <div className="main-top-border">
              <h1 className="main-logo">LESCE</h1>
            </div>
          </div>
          <div className="center"></div>
          <div className="top-container-right">
            <p className="p-main">
              Since we first launched Lesce Cosmetics, we’ve worked hard to
              create clean beauty products with good ingredients that deliver
              epic payoff. A big part of that is making sure that all our
              products are vegan, cruelty-free, and formulated with care. We
              believe there shouldn’t be a tradeoff between sticking to these
              commitments and creating innovative new launches for you to meet
              and love.
            </p>
          </div>
        </div>
        <div className="inbetween-top-bottom"></div>
        <div className="main-center-bottom">
          <div className="bottom-container-left">
            <h1 className="tag-line">Made for you, with you, and by you.</h1>
          </div>
          <div className="center"></div>
          <Image
            className="bottom-picture"
            src={bottom}
            alt="Picture of the author"
            width={430}
            height={280}
          />
          <div className="main-bottom-border"></div>
        </div>
      </div>
      <RightNav
        background={rBackground()}
        text={rText()}
        left={"LESCE"}
        center={""}
        right={"🛒"}
        cart={blackCart()}
      />
    </div>
  );
};

export default Main;
