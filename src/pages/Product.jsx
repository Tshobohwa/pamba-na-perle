import { PiShoppingCart, PiHeartBold } from 'react-icons/pi';
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Products from "./Products"


const Product = () => {
    const {id} = useParams()
    const {products} = useSelector((store) => store.products)
    const product = products[id]
  return (
    <div className="w-full p-4">
      <div className="gap-2 flex w-full h-[500px]">
        <div className="h-full w-[600px]">
          <img src={product.images[0]} alt={product.productName} className="object-cover h-full w-full" />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-yellow-700">{product.productName}</h1>
            <p className='max-w-lg'>{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam molestiae sequi maiores accusantium nisi odit facilis quae vel ut, dolores eum architecto eos, voluptates repellat! Aut magnam temporibus nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ut illum. Maiores, voluptates! Placeat rerum consequatur ducimus sed est, exercitationem porro reprehenderit rem iusto nisi soluta dolor, amet ad dolore?</p>
          </div>
          <div className="w-full flex justify-start gap-2 items-center">
            <button className="bg-red-500 py-2 w-[10rem] rounded-md text-white">BUY NOW</button>
            <button className="py-2 w-[10rem] border border-red-500 rounded-md text-red-500">ADD TO CART</button>
            <button className='flex gap-2 items-center'>
              <PiHeartBold/>
              <p>909798</p>
            </button>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Product
