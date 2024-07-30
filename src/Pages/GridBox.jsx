import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const GridBox = () => {
  const itemsPerPage = 20;
  const totalItems = 75; // Total number of items (can be dynamic)
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Generating 75 boxes
  const boxes = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
    title: `Box ${index + 1}`,
  }));

  // Calculate the boxes to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBoxes = boxes.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4">
      <div className=" flex justify-center text-4xl pb-5">Featured Product</div>
      <div>
        <div className="grid grid-cols-4 border-collapse mb-4 w-3/7 min-h-custom flex-grow">
          {currentBoxes.map((box) => (
            <div
              key={box.id}
              className="flex items-center justify-center h-32 w-56 bg-customColorbg border-2 border-customColorDark"
            >
              <span className="text-md">{box.title}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 justify-end select-none">
          <div
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center px-4 py-2 text-black cursor-pointer select-none"
          >
            <GrFormPrevious />
            Previous
          </div>

          <span className="text-md">
            Page {currentPage} of {totalPages}
          </span>

          <div
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center px-4 py-2 text-black cursor-pointer"
          >
            Next
            <GrFormNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
