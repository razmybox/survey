import React from "react";

function Form() {
  return (
    <>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="number"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
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
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <input
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
            <div className="flex justify-center items-center mt-5 mb-3">
              <a
                href="/approval-page"
                className="border px-10 border-blue-300 text-white py-2 rounded-md text-md  bg-indigo-600 hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                NEXT
              </a>
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
