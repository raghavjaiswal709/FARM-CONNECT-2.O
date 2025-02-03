import React from 'react'
import "./DisplayProductsForFarmer.css"
import AllHeader from '../../../../../components/Layout/AllHeader/AllHeader/AllHeader'

const DisplayProductsForFarmer = () => {
  return (
    <div>
      <AllHeader />

      <div className='main-container'>
        <section >
          <h2>Your Products</h2>
        </section>
        <section className='cardsContainer'>
          <div className='imageAndTitle'>
          <h1 className='cardHeading'>Maize</h1>
            <img className='cardImage' src="https://media.istockphoto.com/id/1061097354/photo/the-corn-plant-in-the-field.jpg?s=612x612&w=0&k=20&c=NEEzE5il-up8g7NZj_7HJUpyVep18zBRfhnMZ5laLiQ=" alt='maize-image' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default DisplayProductsForFarmer
