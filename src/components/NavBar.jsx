import { PiShoppingCart } from 'react-icons/pi';
import pambaNaPerle from '../assets/pamba-na-perle.png'

const NavBar = () => {
  return (   
<nav className="fixed bg-slate-900 px-8 z-20 top-0 left-0 right-0 h-[70px] flex justify-between items-center">
  <a href="/" className="h-[65px] w-[65px]">
    <img src={pambaNaPerle} alt="Logo" className="h-full w-full object-contain" />
  </a>
    <form className="w-[50%]">
      <input type="text" className="bg-white h-[2.5rem] border border-gray-300 w-full" />
    </form>
    <button className='text-2xl text-white'>
      <PiShoppingCart />
    </button>
</nav>   
  )
}

export default NavBar
