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
    window.localStorage.removeItem(" user ");
    const { data } = await axios.post(`http://localhost:8000/api/logout`);
    toast(data.message);
    history.push("/signin");
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
              <div className="text-gray-500 font-bold">{user && user.name}</div>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
