import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HeaderFooter />}>
            <Route index element={<Home />}/>
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
            <Route path='/Products' element={<Products/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes> 
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
