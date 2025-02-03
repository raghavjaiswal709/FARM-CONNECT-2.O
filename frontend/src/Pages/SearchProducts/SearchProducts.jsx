import React, { useState } from 'react'
import { useSearch } from '../../context/search'
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader'
import SearchInput from '../../components/SearchInput/SearchInput'
import "../SearchProducts/SearchProducts.css"
import { useNavigate, useParams } from "react-router-dom";


const SearchProducts = () => {
    const [values,setValues] = useSearch()
    const navigate = useNavigate();

  return (
    <div>
    <AllHeader />
      <div className='container'>
        <div className='text-center'></div>
        <div className='topelementsSEarchResults'>
        <div>
        <h3>Search results</h3>
        <h6>{values?.results.length < 1 ? 'no product Found' : `found ${values?.results.length}`}</h6>
        </div>
        <div className='arrwosearch'>
        <button className='backBTNSearch'  onClick={() => navigate("/HomepageWholeseller")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
</button>
        <SearchInput />
        </div>
        
        </div>
        <div className="d-flex flex-wrap mt-4 cardsDiv">
            {values?.results.map((p) => (
             
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    style={{ width: "18rem", height: "14rem" }}
                    alt={p.title}
                  />
                  <div className="card-body productcardMainDiv">
                    <h5 className="card-title cardTitle">{p.title}</h5>
                    <p className="card-text cardTitle">{p.discription}</p>  
                    <h3 className="card-text cardTitle">₹{p.price} Per KGs</h3>  
                    <section className='BargainBtnSection'>
                    <button href="#" className="BargainBTN">Bargain</button>
                    <button href="#" className="cartBTN">Cart</button>
                   
                   
                    <button href="#" onClick={() => navigate(`/HomepageWholeseller/product/${p.slug}`)} className="DetailsBTN">More Details</button>
                    <button href="#" className="BuyBTN">Buy Now</button>
                    
                    
                    </section>

                  </div>
                </div>
              
            ))}
          </div>

      </div>
    </div>
  )
}

export default SearchProducts
