import React, {useState} from 'react'
import FilterBar from './Filter/FilterBar'
import Category from './Filter/FilterCategory'
import ProductList from './Product/ProductList'

const Body = () => {
  const [sortby, setSortBy] = useState('sortbyfeatured');
  const [hitsperpage, setHitsPerPage] = useState(16);

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  }

  const handleHitsPerPageChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setHitsPerPage(newValue);
  }
  return (
    <>
    <div className="container">
        <div className="row">
        <div className="col-3">
          <FilterBar />
        </div>
        <div className="col-9">
          <div className="product__view">
            <div className="product-sortby product__option">
              <select name="sortby" value={sortby} onChange={handleSortByChange}>
                <option value="sortbyfeatured">Sort by featured</option>
                <option value="sortbypriceascending">Price Ascending</option>
                <option value="sortbypricedescending">Price Descending</option>
              </select>
            </div>
            <div className="product-itemperpage product__option">
              <select name="itemperpage" value={hitsperpage} onChange={handleHitsPerPageChange}>
                <option value="16">16 hits per page</option>
                <option value="32">32 hits per page</option>
                <option value="64">64 hits per page</option>
              </select>
            </div>
          </div>
            <ProductList sortby={sortby} hitsperpage={hitsperpage} />
        </div>
        </div>
    </div>
    </>
  )
}

export default Body
