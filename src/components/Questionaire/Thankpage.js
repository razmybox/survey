import React from "react";
import { useHistory } from "react-router-dom";

function Thankpage() {

  const history = useHistory();

  const handleSubmit = () => {
      history.push("/");
  };
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center my-3">
          <img src="/images/survey1.svg" alt="" />
        </div>

        <div className="px-6">
          <h1 className="font-bold items-center justify-center flex py-2">
         Thank you for taking this survey
          </h1>
         
        </div>

        <div className="flex justify-center items-center mt-5">
          <button 
          onClick={handleSubmit}
          className="border border-blue-300 text-blue-500 py-2 px-2 rounded-md text-md">
            Home Page
          </button>
        </div>
      </div>

     
    </>
  );
}

export default Thankpage;
