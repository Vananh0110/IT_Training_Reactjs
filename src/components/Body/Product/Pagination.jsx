import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import Pagination from './Pagination';

const ProductList = ({ sortby, hitsperpage, filteredBrands }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (response.ok) {
          const data = await response.json();

          const filteredProducts = data.filter((product) =>
            filteredBrands.length === 0
              ? true
              : filteredBrands.includes(product.manufacturer)
          );

          const sortedProducts = filteredProducts.sort((a, b) => {
            if (sortby === 'sortbyfeatured') {
              return a.bestSellingRank - b.bestSellingRank;
            } else if (sortby === 'sortbypriceascending') {
              return a.salePrice - b.salePrice;
            } else if (sortby === 'sortbypricedescending') {
              return b.salePrice - a.salePrice;
            }
            return 0;
          });

          setProducts(sortedProducts);
          setLoading(false);
        } else {
          console.error('Failed to fetch data from Api');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchProducts();
  }, [sortby, hitsperpage, currentPage, filteredBrands]);

  useEffect(() => {
    setCurrentPage(1);
  }, [hitsperpage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = hitsperpage;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="product-list list-unstyled">
        {visibleProducts.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductList;

