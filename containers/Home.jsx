import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../sanity/lib/client";

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner />
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
      {console.log(bannerData)}
    </div>
    <div className='products-container'>
      {products?.map(
        (product) => product.name
      )}
    </div>
    <FooterBanner />
  </>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home;