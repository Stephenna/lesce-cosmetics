import Fade from "react-reveal/Fade";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
import { useState } from "react";
Link;
import Cart from "../../pages/Cart";
import { whiteCart } from "./WhiteStyling";
whiteCart
const RightNav = ({ background, text, left, center, cart, blah }) => {


  return (
    <div className="rightNav" style={background}>
      <div className="rightNav-left" style={text}>
        <h1 className="nav-left-text" style={text}>
          {left}
        </h1>
      </div>
      <div className="rightNav-center">
        <h1 className="nav-center">{center}</h1>
      </div>
      <div className="rightNav-right">
        <p className="rightNav-p" style={text}>
          SKINCARE
        </p>
      <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default RightNav;
