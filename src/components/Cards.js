import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="laptop" />
        </div>
        <div className="details">
            <p>{title}</p>        
            <p>{author}</p>
            <p>{price} DH</p>
            <button 
            className='btn btn-primary'
            onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards;
