import React from "react";

function Spinner() {
  return (
    <>
      <div className="mt-60">
        <div className=" flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>

        <div className="flex justify-center items-center py-4">
          <h1 className="text-2xl text-gray-700">Submitting your survey...</h1>
        </div>
      </div>
    </>
  );
}

export default Spinner;
