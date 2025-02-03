import React from 'react'
import emptyCart from "../../assets/emptybag.png"
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader'
import "../BoughtProducts/BoughtProducts.css"

const BoughtProducts = () => {
  return (
    <div>
    <AllHeader />
    <div className='megaDIVBOUGHT'>
    <div className='mainDIVBoughtProduct'>
    <img className='emptyBagPNG' src={emptyCart} alt='empty cart'/>
      <h1>You havn't Bought anything yet 😪</h1>
      </div>
      </div>
    </div>
  )
}

export default BoughtProducts
