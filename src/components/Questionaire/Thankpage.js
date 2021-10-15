import React from "react";

function Thankpage() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center my-3">
          <img src="/images/survey1.svg" alt="" />
        </div>

        <div className="px-6">
          <h1 className="font-bold items-center justify-center flex py-2">
            Please check out this survey
          </h1>
          <p className="items-center justify-center flex">
            There's no point creating another class for a nav component when
            after all that will be the only component with those classes. It
          </p>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button className="border border-blue-300 text-blue-500 py-2 px-2 rounded-md text-md">
            Home Page
          </button>
        </div>
      </div>

     
    </>
  );
}

export default Thankpage;
