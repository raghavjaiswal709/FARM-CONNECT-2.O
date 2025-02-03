import React, { useState } from 'react';
import axios from 'axios';
import "../bargainRes/bargainRes.css";

const BargainRes = ({ bargain, onRespond }) => {
  const [status, setStatus] = useState('');

  const respondToBargain = () => {
    if (!bargain || !bargain._id || !bargain.price) {
      console.error('Bargain ID or price is not defined.');
      return;
    }

    axios.post('/api/v1/bargain/respond', {
      status,
      bargainId: bargain._id // Pass bargainId along with status
    })
    .then(response => {
      alert(response.data.message);
      onRespond();
    })
    .catch(error => {
      console.error('Error responding to bargain:', error);
    });
  };

  return (
    <div className='Main-Container'>
      <div className='bargainCard'>
        {bargain && bargain.title && <p>Product Title: {bargain.title}</p>}
        {bargain && bargain.price && <p>Requested Price: ${bargain.price}</p>}
        <label>Response: </label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Response</option>
          <option value="accepted">Accept</option>
          <option value="rejected">Reject</option>
        </select>
        {' '}
        <button onClick={respondToBargain}>Submit Response</button>
      </div>
    </div>
  );
};

export default BargainRes;
