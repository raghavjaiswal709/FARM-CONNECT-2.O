import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import BargainRes from '../../components/Layout/bargainRes/BargainRes';

const App = () => {
  const [bargains, setBargains] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/bargain/get-product')
      .then(response => {
        setBargains(response.data);
      })
      .catch(error => {
        console.error('Error fetching bargains:', error);
      });
  }, []);

  const handleBargainResponse = () => {
    axios.get('http://localhost:3001/bargains')
      .then(response => {
        setBargains(response.data);
      })
      .catch(error => {
        console.error('Error fetching updated bargains:', error);
      });
  };

  return (
    <div>
      <ProductList />
      <hr />
      <h1>Bargain Requests</h1>
      {bargains.map(bargain => (
        <BargainRes key={bargain._id} bargain={bargain} onRespond={handleBargainResponse} />
      ))}
    </div>
  );
};

export default App;

