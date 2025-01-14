"use client"

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";
import data from "@/app/utils/data";

const ITEMS_PER_PAGE = 8;

export default function PaginatedList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(data.length / ITEMS_PER_PAGE), []);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("paginated-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="paginated-list"
      className="container mx-auto max-w-5xl px-4 py-8"
      aria-label="Paginated content"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="transition-transform duration-300 hover:scale-[1.02]"
          >
            <Card
              id={item.id}
              image={item.images?.[0]}
              title={item.title}
              date={item.date.toUpperCase()}
            />
          </div>
        ))}
      </div>

      <nav
        className="mt-8 flex flex-wrap items-center justify-center gap-2"
        aria-label="Pagination"
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Previous
        </button>

        {pageNumbers.map((number, index) => (
          <button
            key={index}
            onClick={() => typeof number === "number" && handlePageChange(number)}
            disabled={number === "..."}
            className={`min-w-[40px] rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              number === currentPage
                ? "bg-blue-600 text-white"
                : number === "..."
                ? "cursor-default text-gray-400"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-current={number === currentPage ? "page" : undefined}
            aria-label={
              typeof number === "number"
                ? `Go to page ${number}`
                : "More pages"
            }
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="Go to next page"
        >
          Next
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </nav>

      <div className="mt-4 text-center text-sm text-gray-600">
        Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
        {Math.min(currentPage * ITEMS_PER_PAGE, data.length)} of {data.length} items
      </div>
    </section>
  );
}