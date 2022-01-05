import Fade from "react-reveal/Fade";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";

import { whiteCart } from "./WhiteStyling";
whiteCart
const RightNav = ({ background, text, left, center, cart, blah }) => {


  return (
    <div className="rightNav" style={background}>
      <div className="rightNav-left" style={text}>
        <Link href="/">
          <a style={text}><h1 className="nav-left-text" style={text}>
          {left}
        </h1></a>
        </Link>
        
      </div>
      <div className="rightNav-center">
        <h1 className="nav-center">{center}</h1>
      </div>
      <div className="rightNav-right">
        <p className="rightNav-p" style={text}>
          SKINCARE
        </p>
      </div>
      
    </div>
  );
};

export default RightNav;
