import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
    {/* <NavBar /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path= '/products' element={<Products/>}/>
      <Route path='products/:id' element={<Product/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>  )
}

export default App
