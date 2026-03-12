import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; // Import the brick

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We fetch from the FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>⏳ Loading Store...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Featured Products</h1>
      
      {/* The Grid Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive Grid
        gap: '20px' 
      }}>
        {products.map(product => (
          // We pass the data to the card
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;