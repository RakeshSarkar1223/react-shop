import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'; // You can keep the empty CSS file for now
// import { useCart } from './context/CartContext.jsx';
import Cart from './pages/Cart.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import { useSelector } from 'react-redux';

function App() {
    // const {cart} = useCart();
    // const totalItems = cart.reduce((acc, { product }) => acc + product.quantity, 0);
    const cart = useSelector(state => state.cart);
  return (
    <BrowserRouter>
      {/* Simple Header */}
      <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>🛍️ React Shop</h2>
        <div>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
          
          {/* Show Cart Count! */}
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            🛒 Cart ({cart.length})
          </Link>
          
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* We will build the Cart page next! */}
        <Route path="/cart" element={<Cart/>} />
        {/* The :id part is a variable! It matches /product/1, /product/50, etc. */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;