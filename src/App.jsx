import {useRef } from 'react'
import './App.css'
import NavbarInfo from './components/NavbarInfo'
import Navbar from './components/Navbar'
import MainPoster from './components/MainPoster'
import DiscountCard from './components/DiscountCard'
import DiscountsContainer from './components/DiscountsContainer'
import Categories from './components/Categories'
import Sales from './components/Sales'
import FeaturedProducts from './components/FeaturedProducts'
import ChooseUs from './components/ChooseUs'
import Footer from './components/Footer'
import Copywrite from './components/Copywrite'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'

function App() {
  const tawkMessengerRef = useRef();

  const onLoad = () => {
    console.log('onLoad works!');
};
 
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'
    element={
      <>
      <NavbarInfo/>
      <Navbar/>
      <MainPoster/>
      <DiscountsContainer/>
      <Categories/>
      <Sales/>
      <FeaturedProducts/>
      <ChooseUs/>
      <Footer/>
      <Copywrite/>
      </>
    }
    >
    </Route>

      <Route path="/about" element={<About/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
