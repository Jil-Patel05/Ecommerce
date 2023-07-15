import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  let { loading, error, products } = useSelector((state) => state.products);
  const data = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFx1pD-5y61mO3S-e1grpCuf24c6zMIGanYrbzcIwB&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbmT5f6Uqu-p0tDftdiTuI8u187X2fyvoUXkcKcWz&s"
  ];
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
         <Loader />
       ) : (
        <Fragment>
           <MetaData title="ECOMMERCE" />
      <MetaData title="ECOMMERCE" />
      <div className="banner">
        <p>Welcome to <span>Ecommerce</span></p>
        <h1><span>F</span>IND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll
          </button>
        </a>
            </div>
       

      <h2 className="homeHeading" id="container">Featured Products</h2>
      <div className="container">
        {products &&
               products.map((product) => (
                 <ProductCard key={product._id} product={product} />
               ))}
      </div>
      </Fragment>
       )}
    </Fragment>
  );
};

export default Home;