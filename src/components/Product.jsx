import React from 'react'

const Product = (props) => {
  const {productName, description, images} = props.product 
  return (
    <div className='h-full w-full border border-gray-300 p-2 flex flex-col gap-2'>
        <div className='w-full'>
            <img src={images[0]} alt={productName} />
        </div>
        <div>

        </div>
        <div>
            <button>

            </button>
            <button>

            </button>
        </div>
    </div>
  )
}

export default Product
