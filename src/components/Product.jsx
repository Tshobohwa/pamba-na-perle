// import { FaCartShopping } from 'react-icons/pi';
import { PiShoppingCart, PiHeartBold } from 'react-icons/pi';
// PiShoppingCartSimpleBold
const Product = (props) => {
  const {productName, description, images} = props.product 
  return (
    <div className='h-full w-full border border-gray-300 p-2 flex flex-col gap-2'>
        <div className='w-full'>
            <img src={images[0]} alt={productName} />
        </div>
        <div className='w-full'>
          <h2 className='text-lg font-bold'> {productName}</h2>
          <p className='text-xs font-light'>{description}</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-2'>  
            <button className='border rounded-md bg-red-500 text-white p-1 w-full font-semibold' >BUY</button>
          <div className='flex justify-end gap-3'>
            <button className='text-2xl'>
              <PiHeartBold />
            </button>
            <button className='text-2xl'>
              <PiShoppingCart />
            </button>
          </div>
        </div>
    </div>
  )
}

export default Product
