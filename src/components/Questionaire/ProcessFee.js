import React from "react";
import { useHistory } from "react-router-dom";

function ProcessFee() {
  const history = useHistory();

  const handleSubmit = () => {
    setTimeout(() => {
      history.push("/payment-opt");
    }, 1000);
  };
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="text-center my-10">
          <h1 className="font-bold text-3xl mb-2">One Time Processing Fee</h1>
          <div className="flex flex-col md:flex-row px-3 md:px-0">
            <div className="w-full md:1/3 rounded-lg">
              <div className="rounded lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-4">
                <h3 className="text-gray-600 text-lg">STANDARD</h3>
                <p className="className=font-bold text-black text-3xl">$75</p>
                <p className="text-md text-indigo-600 font-bold mt-2">
                  Your loan will be paid in 5 business days
                </p>
                <button
                  onClick={handleSubmit}
                  className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-100 ease-in-out py-4 mt-4"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="w-full md:1/3 rounded-lg">
              <div className="rounded lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-4">
                <h3 className="text-gray-600 text-lg">CLASSIC</h3>
                <p className="className=font-bold text-black text-3xl">$90</p>
                <p className="text-md text-indigo-600 mt-2 font-bold">
                  Your loan will be paid in 3 business days
                </p>
                <button
                  onClick={handleSubmit}
                  className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-100 ease-in-out py-4 mt-4"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="w-full md:1/3 rounded-lg">
              <div className="rounded lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-4">
                <h3 className="text-gray-600 text-lg">PREMIUM</h3>
                <p className="className=font-bold text-black text-3xl">$150</p>
                <p className="text-md text-indigo-600 mt-2 font-bold ">
                  Your loan will be paid in 1 business day
                </p>
                <button
                  onClick={handleSubmit}
                  className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-100 ease-in-out py-4 mt-4"
                >
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
