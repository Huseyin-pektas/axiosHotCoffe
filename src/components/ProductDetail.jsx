import React from 'react'

const ProductDetail = ({coffe}) => {
  return (
    <div className='single-user'>
      <img src={coffe.image} alt='' />
      <div className='user-info'>
        <h3>
          {coffe.title} 
        </h3>
        <p className='user-location'>
        {coffe.ingredients.join(", ")} </p>
        <p className='user-mail'>{coffe.description.slice(0,100)} </p>
        
      </div>
    </div>
  )
}

export default ProductDetail