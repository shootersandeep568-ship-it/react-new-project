import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Login from './component/Login';
import Signup from './component/Signup';
import Details from './component/componet1/Details';
import Blogs from './component/Blogs';
import Postdetails from './component/componet1/Postdetails';
import { CartProvider, useCart } from "react-use-cart";
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Signup />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Blogs' element={<Blogs />}></Route>
            <Route path='/Project' element={<Project />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Header' element={<Header />}></Route>
            <Route path='/Details/:id' element={<Details />}></Route>
            <Route path='/Postdetails/:id' element={<Postdetails />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
