import React, {useState, useEffect} from 'react';
import ProductDetail from './ProductDetail';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(' http://localhost:3001/products');
        if(response.ok) {
          const data = await response.json();
          
          setProducts(data);
          setLoading(false);
        } else {
          console.error('Failed to fetch data from Api');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchProducts();
  }, []);



  return (
    <>
      <div className="product-list list-unstyled">
      {products && products.length > 0 ? (
          products.map((product) => (
            <ProductDetail key={product.name} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  )
}

export default ProductList
