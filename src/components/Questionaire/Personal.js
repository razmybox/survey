import React, { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Personal() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`http://localhost:8000/api/personal`, {
        firstName,
        lastName,
        dob,
        email,
        street,
        city,
        state,
      });
      setTimeout(() => {
        history.push("/approval-page");
      }, 5000);
      setLoading(false);
      console.log("PERSONAL-INFO", data);
    } catch (err) {
      setLoading(false);
    }
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
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="mb-0 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State/Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
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
                  disabled={
                    !firstName || !street || !lastName || !state || !dob
                  }
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Personal;
