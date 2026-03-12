import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // 1. Import hook to read URL
import { useCart } from '../context/CartContext'; 

function ProductDetails() {
  const { id } = useParams(); // 2. Grab the ID from the URL (e.g., /product/5 -> id = 5)
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // 3. Fetch ONLY this single product
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>⏳ Loading details...</h2>;

  return (
    <div style={{ padding: '40px', display: 'flex', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Left: Big Image */}
      <img src={product.image} alt={product.title} style={{ width: '300px', objectFit: 'contain' }} />

      {/* Right: Details */}
      <div>
        <h1 style={{ fontSize: '24px' }}>{product.title}</h1>
        <p style={{ color: '#555', fontStyle: 'italic' }}>Category: {product.category}</p>
        <p style={{ lineHeight: '1.6' }}>{product.description}</p>
        <h2 style={{ fontSize: '28px', color: '#007bff' }}>${product.price}</h2>
        
        <button 
          onClick={() => addToCart(product)}
          style={{ 
            backgroundColor: 'black', color: 'white', padding: '12px 24px', 
            fontSize: '16px', cursor: 'pointer', borderRadius: '5px', marginTop: '20px' 
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;