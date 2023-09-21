import React, { useEffect, useState } from 'react';

const ProductDetail = ({ product }) => {
  // const [categoryName, setCategoryName] = useState('');
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3001/categories');

  //       if(response.ok) {
  //         const data = await response.json();

  //         const matchingCategory = data.lv1.find(category => category.name === product.categories);

  //       if(matchingCategory) {
  //         setCategoryName(matchingCategory.name);
  //         console.log(matchingCategory.name);
  //       }
  //       } else {
  //         console.error('Failed to fetch categories from API');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching categories', error);
  //     }
  //   };

  //   fetchCategories();
  // }, [product.categories]);

  return (
    <li className="hit-item">
      <article className="hit">
        <header className="hit-image-container">
          <img
            src={product.image}
            alt={product.name}
            className='hit-image'/>
        </header>
        <div className="hit-info-container">
          <p className="hit-category">{product.categories}</p>
          <h1>
            <span className="highlight">
              <span className="highlight-nonhighlight">
                {product.name}
              </span>
            </span>
          </h1>
          <p className="hit-description">
            <span className="hit-snippet">
              <span className="snippet-nonhighlight">
                {product.shortDescription}
              </span>
            </span>
          </p>
          <footer>
            <p>
              <span className="hit-em">$</span>
              <strong>{product.salePrice}</strong>
              <span className="hit-em hit-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16"><path fill="#e2a400" fill-rule="evenodd" d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"></path></svg>
              {product.bestSellingRank}
              </span>
            </p>
          </footer>
        </div>
      </article>
    </li>
  );
};

export default ProductDetail;
