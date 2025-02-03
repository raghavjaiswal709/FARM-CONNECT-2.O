import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../ProductDetails/ProductDetails.css"
import AllHeader from "../../components/Layout/AllHeader/AllHeader/AllHeader";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
        <div>
        <AllHeader />
        <div className="ProductDetailsMainDIV">
        <div>
      <div className="row container product-details ProductDetailsMainDIV2 ">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top productDetailsIMG"
            alt={product.name}
            height={"300px"}
            width={"250px"}
          />
        </div>
        <div className="col-md-6 product-details-info productDetalisText">
        
          <h1 className="text-center">Product Details</h1>
          <hr />
          <div className="titlePRICEProductDetails">
          <div className="justToFlex">
          <h3>Title : {product.title}</h3>
          <h3>
            Price : <span className="spanProductDetaiils">₹_
            {product?.price?.toLocaleString("en-US", {
            })}</span>
          </h3>
          </div>
          </div>
          <div className="giveMargin">
          <h6>Description : {product.discription}</h6>
          <h6>Quantity : {product.quantity} KGs</h6>
          <h6>Harvest Date : {product.date}</h6>
          <h6>address : {product.address}</h6>
          <h6>district : {product.district}</h6>
          <h6>state : {product.state}</h6>
          
          <h6>Category : {product?.category?.name}</h6>
          <div className="BargainBtnSectionProduct">
          {/* <button class="btn btn-secondary ms-1">ADD TO CART</button> */}
          <button href="#" className="BargainBTN">Bargain</button>
                    <button href="#" className="cartBTN">Cart</button>
                   
                   
                    {/* <button href="#" className="DetailsBTN" onClick={() => navigate(`product/${p.slug}`)}>More Details</button> */}
                    <button href="#" className="BuyBTN">Buy Now</button>
                    </div>
        </div>
        </div>
      </div>
      {/* <hr /> */}
      {/* <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button>
                <button href="#" className="BargainBTN">Bargain</button>
                    <button href="#" className="cartBTN">Cart</button>
                   
                   
                    <button href="#" className="DetailsBTN" onClick={() => navigate(`product/${p.slug}`)}>More Details</button>
                    <button href="#" className="BuyBTN">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      </div>
      </div>
      </div>
  );
};

export default ProductDetails;