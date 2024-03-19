"use client";
import Pagination from "@/components/Pagination";
import ModalBox from "@/components/ui/ModalBox";
import fakeData from "@/app/data/data.json";
import { useState } from "react";

const dummycat: string[] = [
  "shoes",
  "men t-shirt",
  "makeup",
  "jewellery",
  "women t-shirt",
  "furniture",
];

interface Item {
  category: string;
  isChecked: boolean;
}

const Page = () => {
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount: number = Math.ceil(fakeData.length / pageSize);

  const currentItems = function getCategoriesByPageNumber(
    pageNumber: number,
    itemsPerPage: number,
    categories: any
  ) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, categories.length);

    return categories.slice(startIndex, endIndex);
  };

  const items = currentItems(currentPage, pageSize, fakeData);

  // console.log(items);

  const handlePageChange = (pageNum: number) => {
    if (pageNum < 1) return;
    if (pageNum > pagesCount) return;
    setCurrentPage(pageNum);
  };

  return (
    <div>
      <ModalBox>
        <div className="text-center space-y-4 px-10">
          <h1 className="text-2xl font-bold">Please mark your interests!</h1>
          <p className="text-sm">We will keep you notified.</p>
        </div>
        <div className="mt-4 mb-2">
          <h2 className="text-lg font-medium">My Saved Interests!</h2>
        </div>
        <div className="flex flex-col gap-6">
          {items.map((item: Item, index: number) => (
            <div key={index} className="flex space-x-2 justify-start">
              <input
                checked={item.isChecked}
                type="checkbox"
                className="h-6 w-6 bg-gray-300 appearance-none rounded-sm checked:appearance-auto checked:border-transparent accent-black"
              />
              <label className="font-medium text-sm capitalize">
                {item.category}
              </label>
            </div>
          ))}
        </div>
        <div className="flex w-full space-x-4 text-stone-500 font-bold">
          <Pagination
            pagesCount={pagesCount}
            pageSize={pageSize}
            items={items}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </ModalBox>
    </div>
  );
};

export default Page;
