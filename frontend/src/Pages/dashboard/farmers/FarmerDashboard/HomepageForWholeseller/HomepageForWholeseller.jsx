// frontend/components/ProductListWithBargain.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { Checkbox, Spin } from 'antd';
import SearchInput from "../../../../../components/SearchInput/SearchInput.js";
import { useCart } from "../../../../../context/Cart.js";
import { useNavigate } from 'react-router-dom';
import AllHeader from "../../../../../components/Layout/AllHeader/AllHeader/AllHeader.jsx";

const ProductListWithBargain = () => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [bargainPrice, setBargainPrice] = useState(0);
  const [productTitle, setProductTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [cart = [], setCart] = useCart();

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category');
      if (data.success) setCategories(data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  const filterProducts = async () => {
    try {
      const { data } = await axios.post('/api/v1/product/product-filters', {
        checked,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (checked.length) filterProducts();
  }, [checked]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/product-count');
      return data?.total;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/v1/product/get-product');
      setProducts(data.products);
      const total = await getTotal();
      setCart(total);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const openBargainModal = (productId, currentPrice) => {
    setSelectedProductId(productId);
    setBargainPrice(currentPrice);
    setProductTitle(productTitle);

    setModalIsOpen(true);
  };

  const closeBargainModal = () => {
    setModalIsOpen(false);
  };

  const submitBargain = () => {
    axios
      .post(`/api/v1/bargain/${selectedProductId}`, {
        title: productTitle,
        price: parseFloat(bargainPrice),
      })
      .then((response) => {
        toast.success(response.data.message);
        closeBargainModal();
      })
      .catch((error) => {
        console.error('Error initiating bargain:', error);
        toast.error('Error initiating bargain');
      });
  };
  

  return (
    <div>
      <AllHeader />
      <div className="gient2"></div>
      <div className="megaContainerGIENT">
        <div className="massContiner">
          <div className="filterContainer">
            <h5>Filter By Category</h5>
            <div className="d-flex flex-column">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
          </div>
          <div className="maincontainerviewproductWholeseller">
            <div className="headerAndSeachbar">
              <h2 className="productHeading">All Products List</h2>
              <SearchInput />
            </div>

            {loading ? (
              <Spin size="large" />
            ) : (
              <div className="d-flex flex-wrap cardsDiv">
                {products?.map((p) => (
                  <div className="card m-2" style={{ width: '18rem' }} key={p._id}>
                    {p.loading ? (
                      <div className="loading-animation loadinga">Loading...</div>
                    ) : (
                      <>
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          style={{ width: '18rem', height: '14rem' }}
                          alt={p.title}
                          onLoad={() => {
                            setProducts((prevProducts) =>
                              prevProducts.map((product) =>
                                product._id === p._id
                                  ? { ...product, loading: false }
                                  : product
                              )
                            );
                          }}
                          onError={() => {
                            // Handle image load error if needed
                          }}
                        />
                        {p.loading && (
                          <div className="loading-animation loadinga">
                            Loading...{' '}
                            {/* You can replace this with your custom loading animation or spinner */}
                          </div>
                        )}
                        <div className="card-body productcardMainDiv">
                          <h5 className="card-title cardTitle">{p.title}</h5>
                          <p className="card-text cardTitle">{p.discription}</p>
                          <h3 className="card-text cardTitle">₹{p.price} Per KGs</h3>
                          <section className="BargainBtnSection">
                          <button
  href="#"
  className="BargainBTN"
  onClick={() => openBargainModal(p._id, p.price, p.title)}
>
  Bargain
</button>

                            <button
                              href="#"
                              onClick={() => {
                                setCart([...cart, p]);
                                localStorage.setItem(
                                  'cart',
                                  JSON.stringify([...cart, p])
                                );
                                toast.success('Item added to cart');
                              }}
                              className="cartBTN"
                            >
                              Cart
                            </button>
                            <button
                              href="#"
                              className="DetailsBTN"
                              onClick={() => navigate(`product/${p.slug}`)}
                            >
                              More Details
                            </button>
                            {/* <button
                              onClick={() => navigate('/cart')}
                              className="BuyBTN"
                            >
                              Buy Now
                            </button> */}
                          </section>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Bargain Price */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeBargainModal}
        contentLabel="Bargain Modal"
      >
        <h2>Enter Bargain Price</h2>
        <input
          type="number"
          value={bargainPrice}
          onChange={(e) => setBargainPrice(e.target.value)}
        />
        <button onClick={submitBargain}>Submit Bargain</button>
        <button onClick={closeBargainModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ProductListWithBargain;
