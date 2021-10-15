import React from "react";

function ProcessFee() {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="text-center my-10">
          <h1 className="font-bold text-3xl mb-2">Processing Fee</h1>
          <div className="flex flex-col md:flex-row px-3 md:px-0">
            <div className="w-full md:1/3 rounded-lg">
              <div className="rounded lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-4">
                <h3 className="text-gray-600 text-lg">Base</h3>
                <p className="className=font-bold text-black text-3xl">$50</p>
                <p className="text-md text-gray-600 mt-2">
                  Your loan will be paid in 7 business days
                </p>
                <div className="text-md text-gray-600 mt-4">
                  <p className="m-2">All limited Links</p>
                  <p className="m-2">All limited Links</p>
                  <p className="m-2">All limited Links</p>
                </div>
                <button className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-100 ease-in-out py-4 mt-4">
                  Submit
                </button>
              </div>
            </div>


            <div className="w-full md:1/3 rounded-lg">
              <div className="rounded lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-4">
                <h3 className="text-gray-600 text-lg">Base</h3>
                <p className="className=font-bold text-black text-3xl">$85</p>
                <p className="text-md text-gray-600 mt-2">
                  Your loan will be paid in 7 business days
                </p>
                <div className="text-md text-gray-600 mt-4">
                  <p className="m-2">All limited Links</p>
                  <p className="m-2">All limited Links</p>
                  <p className="m-2">All limited Links</p>
                </div>
                <button className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-100 ease-in-out py-4 mt-4">
                  Submit
                </button>
              </div>
            </div>

            <div className="w-full md:1/3 rounded-lg">
              <div className="rounded lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-4">
                <h3 className="text-gray-600 text-lg">Base</h3>
                <p className="className=font-bold text-black text-3xl">$110</p>
                <p className="text-md text-gray-600 mt-2">
                  Your loan will be paid in 7 business days
                </p>
                <div className="text-md text-gray-600 mt-4">
                  <p className="m-2">All limited Links</p>
                  <p className="m-2">All limited Links</p>
                  <p className="m-2">All limited Links</p>
                </div>
                <button className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-100 ease-in-out py-4 mt-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcessFee;
