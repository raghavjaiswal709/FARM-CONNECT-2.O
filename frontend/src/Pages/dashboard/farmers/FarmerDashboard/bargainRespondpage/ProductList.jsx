import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/product/get-product')
      .then(response => {
        setProducts(response.data.products); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); 
  const initiateBargain = (productId, price) => {
    const newPrice = prompt(`Enter your desired price for the product ${productId}`, price);
    if (newPrice !== null) {
      axios.post(`/api/v1/bargain/${productId}`, { price: parseFloat(newPrice) })
        .then(response => {
          alert(response.data.message);
        })
        .catch(error => {
          console.error('Error initiating bargain:', error);
        });
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.name}</strong> - ${product.price}
            {' '}
            <button onClick={() => initiateBargain(product._id, product.price)}>Initiate Bargain</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
