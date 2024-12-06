import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex border-t-2 fixed bottom-0 bg-white inset-x-0 py-2">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl p-2 mx-auto">
      <div className="flex gap-x-2">
      {page > 1 &&  (
          <button className="rounded-md border-2 px-4 py-1" onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button className="rounded-md border-2 px-4 py-1" onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>
       
        <p className="font-bold text-sm ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
