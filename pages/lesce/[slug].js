import { gql, GraphQLClient } from "graphql-request";
import { useState, useEffect } from "react";
import Link from "next/link";
import RightNav from "../../components/NavBars/RightNav";
import LeftNav from "../../components/NavBars/LeftNav";
import Fade from "react-reveal/Fade";
import FaceCard from "../../components/Info-Cards/FaceCard";
import {
  rBackground,
  rText,
  lText,
  lBackground,
  whiteCart
} from "../../components/NavBars/WhiteStyling";
import ProductCard from "../../components/product-cards/ProductCard";
import {
  smBorder,
  medBorder,
  lgBorder,
} from "../../components/product-cards/productCSS";

const SingleCategory = ({ categories }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    categories.map((cats) => {
      setProducts(cats.products);
    });
  });

  return (
    <div className="categories">
      <div className="left-products-info">
        <LeftNav
          background={lBackground()}
          text={lText()}
          words={"PRODUCTS"}
          index={1}
        />
        <FaceCard />
      </div>
      <div className="list-of-products">
        <div className="wtf">
          {products.map((product, i) => {
            if (i % 3 === 0) {
              return (
                <Link
                  href={`/lesce/product/${encodeURIComponent(product.slug)}`}
                  passHref
                >
                  <a>
                    <ProductCard
                      border={medBorder()}
                      width={262}
                      height={357}
                      title={product.title}
                      price={product.price}
                      ids={i}
                      thumbnail={product.thumbnail}
                    />
                  </a>
                </Link>
              );
            } else if (i % 3 === 1) {
              return (
                <Link
                  href={`/lesce/product/${encodeURIComponent(product.slug)}`}
                  passHref
                >
                  <a>
                    <ProductCard
                      border={smBorder()}
                      width={237}
                      height={279}
                      title={product.title}
                      price={product.price}
                      ids={i}
                      thumbnail={product.thumbnail}
                    />
                  </a>
                </Link>
              );
            } else if (i % 3 === 2) {
              return (
                <Link
                  href={`/lesce/product/${encodeURIComponent(product.slug)}`}
                  passHref
                >
                  <a>
                    <ProductCard
                      border={lgBorder()}
                      width={272}
                      height={423}
                      title={product.title}
                      price={product.price}
                      thumbnail={product.thumbnail}
                      ids={i}
                    />
                  </a>
                </Link>
              );
            }
          })}
        </div>
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

export default SingleCategory;

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
      categories(where: { slug: $pageSlug }) {
        title
        slug
        mainImage {
          url
        }
        products {
          title
          id
          price
          sale
          slug
          thumbnail {
            url
          }
        }
      }
    }
  `;
  const variables = { pageSlug };

  const data = await GraphQL.request(query, variables);
  const categories = data.categories;
  return {
    props: {
      categories,
    },
  };
};
