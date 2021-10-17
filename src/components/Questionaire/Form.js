import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";

function Form() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    history.push("/");
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  return (
    
    <>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    type="number"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="street_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    ZIP / Postal
                  </label>
                  <input
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                disabled={
                  !firstName || !lastName || !email || !dob || !state || loading
                }
                type="submit"
                className="w-full flex justify-center mt-5 mb-5 py-5 px-4 border border-transparent rounded-md 
                  shadow-sm text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="text-gray-100 bg-gray-800">
        <div className="max-w-3xl mx-auto py-6">
          <hr className="h-px mt-6 bg-gray-700 border-none" />

          <div className="flex flex-col items-center justify-center mt-6 md:flex-row">
            <div className="flex mt-4 md:m-0">
              <div className="-m-x4">
                <a
                  href="/"
                  className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400"
                >
                  faqs
                </a>
                <a
                  href="/"
                  className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400"
                >
                  about
                </a>
                <a
                  href="/"
                  className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400"
                >
                  contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
