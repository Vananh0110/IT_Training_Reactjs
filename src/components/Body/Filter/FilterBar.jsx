import React from 'react';
import FilterBrand from './FilterBrand';
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';
import FilterRating from './FilterRating';
const FilterBar = () => {
  return (
    <>
    <div className="filter__header">
      <h2>Filters</h2>
      <div class="filter__clear">
        <button class="clearRefinements-button clearRefinements-button--disabled" disabled="" type="button">
            <div class="clear-filters">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h11v11H0z"></path>
                <path fill="#000" fill-rule="nonzero" d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"></path>
              </g>
              </svg>Clear filters
            </div>
          </button>
      </div>
    </div>
    <div className="filter__body">
      <div className="filter__panel">
        <div className="filter__title">
          CATEGORY
        </div>
        <FilterCategory />
      </div>
      <div className="filter__panel">
        <div className="filter__title">
          BRANDS
        </div>
        <FilterBrand />
      </div>
      <div className="filter__panel">
        <div className="filter__title">
          PRICE
        </div>
        <FilterPrice/>
      </div>
      <div className="filter__panel">
        <div className="filter__title">
          FREE SHIPPING
        </div>
      </div>
      <div className="filter__panel">
        <div className="filter__title">
          RATINGS
        </div>
        <FilterRating/>
      </div>
    </div>
    </>
  )
}

export default FilterBar
