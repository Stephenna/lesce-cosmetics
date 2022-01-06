import Link from "next/link";
import RightNav from "../components/NavBars/RightNav";
import LeftNav from "../components/NavBars/LeftNav";
import Fade from "react-reveal/Fade";
import CategoryOutline from "../components/Category-Component/CategoryOutline";
import {rBackground, rText, lText, lBackground, whiteCart} from "../components/NavBars/WhiteStyling";
import { smallBorder, largeBorder, small, large,} from "../components/Category-Component/categoryCSS";
import { gql, GraphQLClient } from "graphql-request";
import { useState } from "react";
useState


const Categories = ({ categories }) => {
  const [addedToCart, setAddedToCart] = useState([])
  return (
    <div className="container categories">
      {/* <Fade bottom> */}
        <LeftNav
          background={lBackground()}
          text={lText()}
          words={"PRODUCTS"}
          index={2}
        />
      {/* </Fade> */}
      {categories.map((category, index) =>
        index % 2 === 0 ? (
          <Link href={`/lesce/${encodeURIComponent(category.slug)}`} passHref>
            <div className="small">
              <CategoryOutline
                border={smallBorder()}
                width={265}
                height={390}
                picture={category.mainImage}
                title={category.title}
                classN={small()}
              />
            </div>
          </Link>
        ) : (
          <Link href={`/lesce/${encodeURIComponent(category.slug)}`} passHref>
            <div className="large">
              <CategoryOutline
                border={largeBorder()}
                width={290}
                height={500}
                picture={category.mainImage}
                title={category.title}
                classN={large()}
              />
            </div>
          </Link>
        )
      )}
      <div className="categories-body">
        {/* <CategoryOutline border={largeBorder()} /> */}
      </div>
      <RightNav
        background={rBackground()}
        text={rText()}
        left={"LESCE"}
        center={""}
        right={"🛒"}
        cart={whiteCart()}
      />
    </div>
  );
};
export default Categories;



export const getStaticProps = async () => {
  const url = process.env.URL;
  const GraphQL = new GraphQLClient(url, {
    headers: {
      Authorization: 'Bearer'  + process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query category {
      categories {
        title
        slug
        mainImage {
          url
        }
      }
    }
    
  `;

  const data = await GraphQL.request(query);
  const categories = data.categories;
  return {
    props: {
      categories,
    },
  };
};