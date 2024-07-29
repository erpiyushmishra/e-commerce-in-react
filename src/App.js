import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Item from './Components/Item/Item';
import Popular from './Components/Popular/Popular';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import men_banner from '../src/Components/Assets/banner_mens.png';
import women_banner from '../src/Components/Assets/banner_women.png';
import kid_banner from '../src/Components/Assets/banner_kids.png';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>} />
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid'/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
        <Footer/>

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
