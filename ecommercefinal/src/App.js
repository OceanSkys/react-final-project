import { Routes, Route } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<HeaderFooter />}>
          <Route index element={<Home />}/>
          <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
          <Route path='/Products' element={<Products/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Checkout' element={<Checkout/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes> 
    </CartProvider>
  );
}

export default App;
