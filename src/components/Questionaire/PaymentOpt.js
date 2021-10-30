import React from "react";
import { useHistory } from "react-router-dom";

function PaymentOpt() {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/");
  };
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="text-center my-10">
          <div className="flex flex-col md:flex-row px-3 md:px-0">
            <div className="w-full md:1/3 rounded-lg">
              <div className="rounded lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-4">
                <div className="flex items-center justify-center my-3">
                  <img src="/images/bitcoin.jpg" alt="" />
                </div>
                <div className="text-md text-gray-600 mt-4">
                  <p className="m-2">bitcoin wallet</p>
                </div>

                <div className="flex items-center justify-center my-3">
                  <img src="/images/qrcode.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
          <h3 className="text-green-600 mt-5 text-lg font-bold">
              You will be contacted immediately your payment is received.
            </h3>
            <h3 className="text-gray-600 mt-5 text-lg">
              For other payment options contact:
            </h3>
            <h1 className="text-gray-800 mt-2 text-lg font-bold">ultralforgivableloan@gmail.com</h1>
          </div>
        </div>

        <div className="flex justify-center items-center mt-5 mb-5">
          <p className="text-red-600">Please do not duplicate your application</p>
        </div>

        <div className="flex justify-center items-center mt-5 mb-5">
          <button
            onClick={handleSubmit}
            className="border border-blue-300 text-blue-500 py-2 px-2 rounded-md text-md"
          >
            Home Page
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentOpt;
