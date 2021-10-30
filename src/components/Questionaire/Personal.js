import React, { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Personal() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const upload = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData();
    formData.append("image", image);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("dob", dob);
    formData.append("email", email);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/personal`,
        formData
      );
      setTimeout(() => {
        history.push("/approval-page");
      }, 10000);
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
  const [credit, setCredit] = useState("");
  const [image, setImage] = useState("");
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
                  Whats your credit score
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    value={credit}
                    onChange={(e) => setCredit(e.target.value)}
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

              <div>
                <label class="w-full flex flex-col items-center mt-5 py-2 px-4bg-white rounded-md shadow-md tracking-wide font-bold border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                  <i class="fas fa-cloud-upload-alt fa-3x"></i>
                  <span class=" text-base leading-normal">Upload ID</span>
                  <input type="file" onChange={upload} class="hidden" />
                </label>
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
