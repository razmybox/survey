import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import { Context } from "../Context";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  const history = useHistory();

  useEffect(() => {
    if (user !== null) history.push("/personalinformation");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      // const { data } = await axios.post(`${process.env.REACT_APP_PUBLIC_API}/register`, {
      const { data } = await axios.post(`http://localhost:8000/api/login`, {
        email,
        password,
      });
      //console.log('LOGIN USER',data)
      dispatch({ type: "LOGIN", payload: data });
      history.push("/personalinformation");
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
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

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                  shadow-sm text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={!email || !password || loading}
                >
                  {loading ? (
                    <ImSpinner2 className="animate-spin h-5 w-5 mr-3 ..." />
                  ) : (
                    "LOGIN"
                  )}
                </button>
              </div>

              <div className="flex items-center mt-3">
                <label className="ml-2 block text-md text-gray-500">
                  Not registered?{" "}
                  <a
                    href="/signup"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    register
                  </a>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-gray-200 w-full flex justify-center items-center py-5">
          <div className="w-60 bg-white p-2 rounded-xl">
            <img
              src="/images/download.jpg"
              alt=""
              className="h-40 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
