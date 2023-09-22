import React, {useState, useEffect} from 'react';
import ProductDetail from './ProductDetail';
import Pagination from './Pagination';

const ProductList = ({sortby, hitsperpage}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(' http://localhost:3001/products');
        if(response.ok) {
          const data = await response.json();

          const sortedProducts = data.sort((a, b) => {
            if (sortby === 'sortbyfeatured') {
              return b.bestSellingRank - a.bestSellingRank;
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
  }, [sortby, hitsperpage, currentPage]);


  useEffect(() => {
    setCurrentPage(1);
  }, [hitsperpage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const totalPages = Math.ceil(products.length / hitsperpage);

  const visibleProducts = products.slice(
    (currentPage - 1) * hitsperpage,
    currentPage * hitsperpage
  );

  return (
    <>
      <div className="product-list list-unstyled">
      {visibleProducts.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </>
  )
}

export default ProductList
