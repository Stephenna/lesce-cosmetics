import { gql, GraphQLClient } from "graphql-request";
import { useState, useEffect } from "react";
import LeftNav from "../../../components/NavBars/LeftNav";
import RightNav from "../../../components/NavBars/RightNav";
import {
  lBackground,
  rBackground,
} from "../../../components/NavBars/BlackStyling";
import { lText, rText } from "../../../components/NavBars/BlackStyling";
import ImageDisplay from "../../../components/Item-details/ImageDisplay";
import ItemDescription from "../../../components/Item-details/ItemDescription";







const Product = ({ product }) => {
  const [subImages, setSubImages] = useState([])
  const [leftTag, setLeftTag] = useState('');
  const [rightTag, setRightTag] = useState('');

  useEffect(() => {
    product.map( product => {
      setSubImages(product.subImages);
      setRightTag(product.tags[0])
      setLeftTag(product.tags[1])
    });
   
  }, [product, subImages]);

 

  return (
    <div className="product-container " >
      <LeftNav
        background={lBackground()}
        text={lText()}
        words={leftTag.toUpperCase()}
        index={2}
      />
      <ImageDisplay subImages={subImages}/>
      <ItemDescription product={product}/>
      <RightNav
        background={rBackground()}
        text={rText()}
        left={"LESCE"}
        center={rightTag.toUpperCase()}
        right={"🛒"}
        
      />
    </div>
  );
};

export default Product;

export const getServerSideProps = async (pageContext) => {
  const url = process.env.URL;
  const GraphQL = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      products(where: { slug: $pageSlug }) {
        title
        id
        subDescription
        description
        ingredients
        price
        sale
        slug
        tags
        subImages {
          url
        }
        reviews {
          createdAt
          title
          name
          reviewBody
          stars
          profileImage {
            url
          }
        }
      }
    }
  `;
  const variables = { pageSlug };
  const data = await GraphQL.request(query, variables);
  const product = data.products;

  return {
    props: {
      product,
    },
  };
};
