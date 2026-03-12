import React from 'react';
// import { useCart } from '../context/CartContext';
import { removeFromCart } from '../redux/cartSlice';
import { useSelector , useDispatch } from 'react-redux';

function Cart() {
  // 1. Get 'cart' AND 'removeFromCart' from context
  // const { cart, removeFromCart } = useCart();

  // 2. Calculate Total Price dynamically
  // We loop through items, multiply price * quantity, and add to total
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  }

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // 3. Handle Empty State
  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Your Cart is Empty 🛒</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Shopping Cart</h1>
      
      {/* List of Items (Using a List layout, not Grid) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '8px',
            justifyContent: 'space-between',
            backgroundColor: 'white'
          }}>
            {/* Left Side: Image & Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src={item.image} alt={item.title} style={{ height: '80px', width: '80px', objectFit: 'contain' }} />
              <div>
                <h3>{item.title.substring(0, 20)}...</h3>
                {/* Show Quantity here */}
                <p style={{ color: '#666' }}>
                  ${item.price} x {item.quantity} units
                </p>
              </div>
            </div>

            {/* Right Side: Total & Remove */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              
              <button 
                onClick={() => handleRemove(item.id)}
                style={{ 
                  backgroundColor: '#ff4d4d', 
                  color: 'white', 
                  border: 'none', 
                  padding: '5px 10px', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Grand Total Section */}
      <div style={{ marginTop: '30px', textAlign: 'right', borderTop: '2px solid #333', paddingTop: '10px' }}>
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 20px', fontSize: '18px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Checkout Now
        </button>
      </div>
    </div>
  );
}

export default Cart;