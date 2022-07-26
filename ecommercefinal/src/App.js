import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home'
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeaderFooter />}>
          <Route index element={<Home />}/>
          <Route path='/ProductDetails' element={<ProductDetails/>}/>
          <Route path='/Products' element={<Products/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
