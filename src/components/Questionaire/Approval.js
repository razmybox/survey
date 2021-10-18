import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useHistory } from "react-router-dom";

function Approval() {
  const [phone, setPhone] = useState(" ");
  const [ssn, setSsn] = useState(" ");
  const [bank, setBank] = useState(" ");
  const [routing, setRouting] = useState(" ");
  const [account, setAccount] = useState(" ");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:8000/api/approval`, {
        phone,
        ssn,
        bank,
        routing,
        account,
      });
      console.log("APPROVAL INFO", data);
      setTimeout(() => {
        history.push("/processing-fee");
      }, 3000);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="py-4">
        <h1 className="text-gray-600 mt-10 text-4xl justify-center items-center flex">
          Congratulations!
        </h1>
        <p className="text-gray-600 py-5 text-2xl justify-center items-center flex">
          Your loan has been approved
        </p>

        <div className=" py-5 px-5 bg-indigo-100 shadow justify-between items-center flex">
          <p className="text-gray-700 font-bold text-2xl">Amount:</p>
          <p className="text-green-600 font-bold text-3xl">$15,053.43</p>
        </div>
        <div className="items-center flex justify-center py-4 px-5  ">
          <p className="text-gray-800 font-bold">
            Please confirm your identity and provide your bank details
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="mb-0 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  SSN
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    value={ssn}
                    onChange={(e) => setSsn(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <PhoneInput
                    defaultCountry="US"
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bank
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Routing Number
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    value={routing}
                    onChange={(e) => setRouting(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full flex justify-center MT-5 py-2 px-4 border border-transparent rounded-md 
                  shadow-sm text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={!phone || !ssn || !bank || !routing || !account}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approval;
