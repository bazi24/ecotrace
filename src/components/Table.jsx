import countryData from "../data/country-data.json";
import companyData from "../data/company-data.json";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

const Table = () => {
  const [selectedData, setSelectedData] = useState(countryData);

  const [sortBy, setSortBy] = useState("carbon");
  const [sortOrder, setSortOrder] = useState("descending");

  const all = selectedData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.carbon,
    0
  );

  function sortData(data) {
    if (sortBy === "name") {
      data.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase())
          return sortOrder === "descending" ? -1 : 1;
        else if (a.name.toLowerCase() > b.name.toLowerCase())
          return sortOrder === "descending" ? 1 : -1;
        return 0;
      });
    } else {
      data.sort(function (a, b) {
        return sortOrder === "descending"
          ? b[sortBy] - a[sortBy]
          : a[sortBy] - b[sortBy];
      });
    }
  }

  sortData(selectedData);
  return (
    <div className="w-[90%] lg:w-[60%]">
      <div className="flex place-content-center">
        <button
          className={
            selectedData === countryData
              ? "bg-green-600 mybtn text-green-50"
              : "bg-green-50 mybtn hover:bg-green-600 hover:text-green-50"
          }
          onClick={() => setSelectedData(countryData)}
        >
          Country Data
        </button>
        <button
          className={
            selectedData === companyData
              ? "bg-green-600 mybtn ml-2 text-green-50"
              : "bg-green-50 mybtn ml-2 hover:bg-green-600 hover:text-green-50"
          }
          onClick={() => setSelectedData(companyData)}
        >
          Company Data
        </button>
      </div>
      <div className="flex overflow-x-auto mt-4  bg-white font-medium rounded-xl">
        <table className="table flex text-green-700 lg:text-[15px] text-[13px]">
          {/* head */}
          <thead>
            <tr>
              <th>% Share</th>
              <th
                className="cursor-pointer hover:text-green-800 "
                onClick={() => {
                  setSortBy("name");
                  sortData(selectedData);
                  sortOrder === "descending"
                    ? setSortOrder("ascending")
                    : setSortOrder("descending");
                }}
              >
                <span
                  className={sortBy === "name" ? "flex text-green-800" : "flex"}
                >
                  {sortBy === "name" &&
                    (sortOrder === "descending" ? (
                      <FaChevronDown className="mt-[3px] mr-1" />
                    ) : (
                      <FaChevronUp className="mt-[3px] mr-1" />
                    ))}
                  {selectedData === countryData ? "Country" : "Company"}
                </span>
              </th>

              <th
                className="cursor-pointer hover:text-green-800"
                onClick={() => {
                  setSortBy("carbon");
                  sortData(selectedData);
                  sortOrder === "descending"
                    ? setSortOrder("ascending")
                    : setSortOrder("descending");
                }}
              >
                <span
                  className={
                    sortBy === "carbon" ? "flex text-green-800" : "flex"
                  }
                >
                  {sortBy === "carbon" &&
                    (sortOrder === "descending" ? (
                      <FaChevronDown className="mt-[3px] mr-1" />
                    ) : (
                      <FaChevronUp className="mt-[3px] mr-1" />
                    ))}
                  Emmissions/tons
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedData.map((data) => (
              <tr key={data.id} className="border-slate-200">
                <td>{(data.carbon / (all / 100)).toFixed(2)}</td>
                <td>{data.name}</td>
                <td>{data.carbon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
