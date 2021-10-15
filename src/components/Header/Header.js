import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../Context";
import { useHistory } from "react-router-dom";

function Header() {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const history = useHistory();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem(" user ");
    const { data } = await axios.post("/api/logout");
    toast(data.message);
    history.push("/");
  };

  return (
    <>
      <header className="bg-gray-200 h-20 flex items-center justify-between px-5 py-3 sticky w-full shadow-400 z-50 shadow-lg">
        <div className="logo">
          <Link to="/">
            <h2 className="font-bold">MiSurvey</h2>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {user === null && (
            <>
              <div>
                <a
                  href="signin"
                  className="border border-blue-300 text-blue-500 py-2 px-2 rounded-md text-md"
                >
                  LOGIN
                </a>
              </div>
            </>
          )}

          {user !== null && (
            <>
              <div onClick={logout}>
                <button className="border border-blue-300 text-blue-500 py-2 px-2 rounded-md text-md">
                  LOGOUT
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
