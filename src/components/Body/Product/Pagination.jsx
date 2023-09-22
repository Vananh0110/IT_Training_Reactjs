import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pagesToShow = 5;

  const renderPageNumbers = () => {
    const half = Math.floor(pagesToShow / 2);
    const start = currentPage - half;
    const end = currentPage + half;

    if (currentPage <= half) {
      return pageNumbers.slice(0, pagesToShow);
    } else if (currentPage >= totalPages - half) {

      return pageNumbers.slice(totalPages - pagesToShow);
    } else {
      return pageNumbers.slice(start - 1, end);
    }
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className="prev-button"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {renderPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          className={`page-number-button ${pageNumber === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className="next-button"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
