import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// import Spinner from "./Spinner";
import axios from "axios";


function FetchPersonnals() {
  let { url } = useRouteMatch();
  const [personnals, setpersonnals] = useState([]);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const fetchPersonnals = () => {
    try {
        const  response = await axios.get(
          `http://localhost:8000/api/fetch-personal`,
        );
        setpersonnals(response.data.personnals); 
      } catch (err) {
        setIsLoadingPage(false);
      }
  };

  useEffect(() => {
    fetchPersonnals();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-black pb-6">Personal List</h1>

      <div className="w-full mt-6">
        <p className="text-xl pb-3 flex items-center"></p>
        <div className="bg-white overflow-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Personnal
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Email Address
                </th>
              </tr>
            </thead>
            {isLoadingPage ? (
              <tbody>
                <tr>
                  <td colSpan="6">
                    <div className="text-center py-6">
                      <p className="font-bold text-black text-lg">Loading...</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : !isLoadingPage && personnals.length <= 0 ? (
              <tbody>
                <tr>
                  <td colSpan="6">
                    <div className="text-center py-6">
                      <p className="font-bold text-black text-lg">
                        No Personnals Yet
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="text-gray-700">
                {personnals.map((personal) => (
                  <tr key={personal._id}>
                    <td className="text-left py-3 px-4">
                        <img src={'http://localhost:8000/static/storage/uploads/'+personal.imgUrl} alt="image" />
                    </td>
                    <td className="text-left py-3 px-4">{personal.firstName} {personal.lastName}</td>
                    <td className="text-left py-3 px-4">{personal.email}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default FetchPersonnals;
