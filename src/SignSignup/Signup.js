import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // const { data } = await axios.post(`${process.env.REACT_APP_PUBLIC_API}/register`, {
      const { data } = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
      toast.success("Registration Successful. Please login");
      setTimeout(() => {
        history.push("/signin");
      }, 3000);
      console.log("REGISTER USER", data);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="mb-0 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                  shadow-sm text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={!name || !email || !password || loading}
                >
                  {loading ? (
                    <ImSpinner2 className="animate-spin h-5 w-5 mr-3 ..." />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>

              <div className="flex items-center mt-3">
                <label className="ml-2 block text-md text-gray-500">
                  Already registered?{" "}
                  <a
                    href="/signin"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    login
                  </a>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-gray-200 w-full flex justify-center items-center py-5">
          <div className="w-60 bg-white p-2 rounded-xl">
            <img
              src="/images/picture1.png"
              alt=""
              className="h-40 object-cover rounded-xl"
            />
            <div className="p-2">
              <h2 className="font-bold text-lg">Heading</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum is a name for a common type of placeholder text.
                Also known as filler or dummy text,
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4">
          <h1 className="font-bold items-center justify-center flex py-2">
            Please check out this survey
          </h1>
          <p className="items-center justify-center flex">
            There's no point creating another class for a nav component when
            after all that will be the only component with those classes. It
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
