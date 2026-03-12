import React from 'react';
// import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

// We receive a single 'product' object as a prop
function ProductCard({ product }) {
    // const {addToCart} = useCart();
const dispatch = useDispatch();
    const handleAdd = (product) => {
      dispatch(addToCart(product))
    }
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '16px', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '350px' // Fixed height keeps the grid neat
    }}>
      {/* Product Image */}
        <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} style={{ height: '150px', cursor: 'pointer' }} />
        </Link>
      
      {/* Title (Truncated if too long) */}
      <h3 style={{ fontSize: '16px', margin: '10px 0' }}>
        {product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title}
      </h3>

      {/* Price & Category */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>${product.price}</span>
        <button onClick={()=>handleAdd(product)} style={{ 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          padding: '8px 12px', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;