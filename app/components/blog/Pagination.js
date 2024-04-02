"use client";
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 3;
  const pages = [];

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li
        role="button"
        key={i}
        className={`page-item ${i === currentPage ? "active" : ""}`}
        onClick={() => handleClick(i)}
      >
        <span className="page-link">{i}</span>
      </li>
    );
  }

  return (
    <ul className="page_navigation">
      <li role="button" className="page-item">
        <span className="page-link">
          <span className="fa fa-arrow-left" />
        </span>
      </li>
      {pages}
      <li role="button" className="page-item">
        <span className="page-link">
          <span className="fa fa-arrow-right" />
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
