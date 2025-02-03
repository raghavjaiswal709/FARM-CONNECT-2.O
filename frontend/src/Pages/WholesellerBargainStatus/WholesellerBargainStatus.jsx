
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader';
import "../WholesellerBargainStatus/wholesellerBargainStatus.css";

const RequestedProducts = ({ token }) => {
    const [requestedProducts, setRequestedProducts] = useState([]);

    useEffect(() => {
        const fetchRequestedProducts = async () => {
            try {
                const response = await axios.get('/api/v1/bargain/requested-products', {
                });
                setRequestedProducts(response.data.requestedProducts);
            } catch (error) {
                console.error('Error fetching requested products:', error);
            }
        };

        fetchRequestedProducts();
    }, []);

    return (
        <div>
                <AllHeader />
                <div className='main-div'>
            <h2>Requested Products</h2>
            <div className='list-container'>
            
                {requestedProducts.map((product) => (
                    <div className='listBoxEach' key={product._id}>
                        <span>Name: {product.title}</span>
                        <br></br>
                        <span>Status: {product.status}</span>
                        <br></br>
                        <span>Bargain price: {product.price}</span>
                        <br></br>
                        <span>product id: {product.productId}</span>
                    </div>
                ))}
            
            </div>
            </div>
        </div>
    );
};

export default RequestedProducts;
