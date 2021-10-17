import React from "react";
import { useHistory } from "react-router-dom";

function Questionnaire() {
  const history = useHistory();

  const handleSubmit = () => {
    setTimeout(() => {
      history.push("/individual-information");
    }, 1500);
  };
  return (
    <>
      <div className="py-4 px-2">
        <h1 className="font-bold items-center justify-center flex py-2 text-gray-700">
          PERSONAL INFORMATION
        </h1>
        <hr />
        <div>
          <p className="text-gray-700 items-center justify-center flex py-3 px-2">
            Did you work at least 15 hours per week before 5/13/20
          </p>

          <div className="items-center justify-center flex mb-7">
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-1" type="checkbox" />
              <label>Yes</label>
            </div>
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-2 ml-2" type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-gray-700 items-center justify-center flex py-3 px-2">
            Did you work at least 15 hours per week before 5/13/20
          </p>

          <div className="items-center justify-center flex mb-7">
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-1" type="checkbox" />
              <label>Yes</label>
            </div>
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-2 ml-2" type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-gray-700 items-center justify-center flex py-3 px-2">
            Did you work at least 15 hours per week before 5/13/20
          </p>

          <div className="items-center justify-center flex mb-7">
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-1" type="checkbox" />
              <label>Yes</label>
            </div>
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-2 ml-2" type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-gray-700 items-center justify-center flex py-3 px-2">
            Did you work at least 15 hours per week before 5/13/20
          </p>

          <div className="items-center justify-center flex mb-7">
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-1" type="checkbox" />
              <label>Yes</label>
            </div>
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-2 ml-2" type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-gray-700 items-center justify-center flex py-3 px-2">
            Did you work at least 15 hours per week before 5/13/20
          </p>

          <div className="items-center justify-center flex mb-7">
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-1" type="checkbox" />
              <label>Yes</label>
            </div>
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-2 ml-2" type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-gray-700 items-center justify-center flex py-3 px-2">
            Did you work at least 15 hours per week before 5/13/20
          </p>

          <div className="items-center justify-center flex mb-7">
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-1" type="checkbox" />
              <label>Yes</label>
            </div>
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-2 ml-2" type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-gray-700 items-center justify-center flex py-3 px-2">
            Did you work at least 15 hours per week before 5/13/20
          </p>

          <div className="items-center justify-center flex mb-7">
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-1" type="checkbox" />
              <label>Yes</label>
            </div>
            <div className="flex space-x-1 items-center justify-center">
              <input className=" px-1 py-2 ml-2" type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full flex justify-center mt-5 py-2 px-4 border border-transparent rounded-md 
                  shadow-sm text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Questionnaire;
