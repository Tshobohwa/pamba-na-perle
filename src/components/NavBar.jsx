import { PiShoppingCart, PiHeartBold } from 'react-icons/pi';
import { AiOutlineSearch } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import pambaNaPerle from '../assets/pamba-na-perle.png'

const NavBar = () => {
  return (   
  <nav className="fixed bg-slate-900 px-8 z-20 top-0 left-0 right-0 h-[70px] flex justify-between items-center">
    <a href="/" className="h-[65px] w-[65px]">
      <img src={pambaNaPerle} alt="Logo" className="h-full w-full object-contain" />
    </a>
      <form className="w-full flex justify-center sm:w-[50%]">
        <input type="text" className="bg-white h-[2.5rem] border w-full outline-none pl-3" placeholder='Search product'/>
        <button className='text-2xl text-white h-[2.5rem] w-[2.5rem] border border-white flex justify-center items-center'>
          <AiOutlineSearch />
        </button>
      </form>
      <div className='flex gap-3 items-center'>
        <button className='text-2xl text-white'>
          <PiHeartBold />
        </button>
        <button className='text-2xl text-white'>
          <PiShoppingCart />
        </button>
        <button className='text-2xl text-white'>
          <VscAccount />
        </button>
      </div>
  </nav>   
  )
}

export default NavBar
