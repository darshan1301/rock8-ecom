"use client";
import React from "react";

interface PaginationProps {
  items: { category: string; isChecked: boolean }[];
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pagesCount: number;
}

const Pagination: React.FC<PaginationProps> = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
  pagesCount,
}) => {
  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <>
      <button onClick={() => onPageChange(currentPage - 1)}>{"<"}</button>
      <span>{currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>{">"}</button>
    </>
  );
};

export default Pagination;
