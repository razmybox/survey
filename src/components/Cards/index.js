import React from "react";

function Card() {
  return (
    <>
      <hr className="w-1/5 mx-auto" />
      <div className="bg-gray-200 w-full flex justify-center items-center py-5">
        <div className="w-60 bg-white p-2 rounded-xl">
          <img
            src="/images/finance.jpg"
            alt=""
            className="h-40 object-cover rounded-xl"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg">
              More than 4 million individuals, families and businesses have
              benefited from our forgivable loan.
            </h2>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <h1 className="font-bold items-center justify-center flex py-2">
          Ultra Loan helps get access to working capital while securing a low
          interest and long repayment term.
        </h1>
      </div>
    </>
  );
}

export default Card;
