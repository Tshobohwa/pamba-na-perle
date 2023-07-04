import { PiShoppingCart } from 'react-icons/pi';
import { AiOutlineSearch } from 'react-icons/ai';
import pambaNaPerle from '../assets/pamba-na-perle.png'

const NavBar = () => {
  return (   
<nav className="fixed bg-slate-900 px-8 z-20 top-0 left-0 right-0 h-[70px] flex justify-between items-center">
  <a href="/" className="h-[65px] w-[65px]">
    <img src={pambaNaPerle} alt="Logo" className="h-full w-full object-contain" />
  </a>
    <form className="w-[50%] flex justify-center">
      <input type="text" className="bg-white h-[2.5rem] border w-full outline-none pl-3" />
      <button className='text-2xl text-white h-[2.5rem] w-[2.5rem] border border-white flex justify-center items-center'>
        <AiOutlineSearch />
      </button>
    </form>
    <button className='text-2xl text-white'>
      <PiShoppingCart />
    </button>
</nav>   
  )
}

export default NavBar
