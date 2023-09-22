import React, { useEffect, useState } from 'react';

const FilterBrand = ({ onFilterChange }) => {
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const result = await fetch('http://localhost:3001/brands');
      const data = await result.json();
      setBrands(data);
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const filtered = brands.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, [searchTerm, brands]);

  useEffect(() => {
    onFilterChange(selectedBrands);
  }, [selectedBrands]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    const brandName = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBrands((prevSelectedBrands) => {
      if (isChecked) {
        return prevSelectedBrands.includes(brandName)
          ? prevSelectedBrands
          : [...prevSelectedBrands, brandName];
      } else {
        return prevSelectedBrands.filter((brand) => brand !== brandName);
      }
    });
  };

  const applyBackground = (brandName, searchTerm) => {
    const nameParts = brandName.split(searchTerm);
    return nameParts.map((part, index) => (
      <span key={index}>
        {part}
        {index < nameParts.length - 1 && (
          <span className="highlight-text">{searchTerm}</span>
        )}
      </span>
    ));
  };

  return (
    <>
      <div className="filter-brand">
        <input
          type="text"
          placeholder="Search for brands..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-brand"
        />
      </div>
      <ul className="list-unstyled">
        {filteredBrands.slice(0, 10).map((brand) => (
          <li className="brand-item" key={brand.name}>
            <input
              className="brand-checkbox"
              type="checkbox"
              value={brand.name}
              onChange={handleCheckBoxChange}
              checked={selectedBrands.includes(brand.name)}
            />
            <span className="brand-name">
              {applyBackground(brand.name, searchTerm)}
            </span>
            <span className="count">{brand.quantity}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterBrand;
