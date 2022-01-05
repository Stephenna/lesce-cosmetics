import Link from "next/link";
import { useState, useEffect } from "react";


const LeftNav = ({ background, text, words, index }) => {
  const arr = ["/", "/Categories", "Products", "/lesce/face", "/lesce/body"];
  const [i, setI] = useState(arr[0]);
  const [displayLink, setDisplayLink] = useState(true);
  const [displayText, setDisplayText] = useState(true);

  useEffect(() => {
    if (!index == 0) {
      setI(arr[index]);
      setDisplayLink(true);
      setDisplayText(false);
    }
    if (index === 2) {
      setDisplayLink(false);
      setDisplayText(true);
    }
  }, [index, arr]);

  return (
    <div className="leftNav" style={background}>
      {displayLink && (
        <h1 className="left-text" style={text}>
          <Link href={i} passHref>
            <a style={{fontSize: 64,}}>{words}</a>
          </Link>
        </h1>
      )}

      {displayText && (
        <h1 className="left-text" style={text}>
          {words}
        </h1>
      )}
    </div>
  );
};

export default LeftNav;
