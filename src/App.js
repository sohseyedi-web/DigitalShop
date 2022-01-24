import './App.scss';
import Cart from './Components/Cart/Cart';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import CartProvider from './Context/CartContext';

function App() {
  return (

    <CartProvider>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<HomePage />} />s
      </Routes>
    </CartProvider>

  );
}

export default App;
