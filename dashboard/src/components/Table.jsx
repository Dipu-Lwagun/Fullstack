import React, { useEffect, useState } from "react";
// import SearchFilter from "./SearchFilter"; // Import Search Filter Component
import Tabletop from "./Tabletop";
import axios from "axios";

const tableData = [
  {
    profile:
      "https://imgs.search.brave.com/yaxP7-ZpnSePR7611KY-N9RUiDqKSqgZnyPAHgX0AdA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJiL1JhamVzaF9I/YW1hbC5qcGc",
    name: "hari",
    date: "2024-02-13",
    brand: "Dell",
    model: " XPS 13",
    title: "Screen Replacement",
    category: "Laptop",
    issueType: "Hardware",
    status: "Completed",
    amount: "$200",
  },
  {
    profile: "https://example.com/profile2.jpg",
    name: "Anthu",
    date: "2024-08-12",
    brand: "MacBook",
    model: " Pro",
    title: "Battery Issue",
    category: "Laptop",
    issueType: "Hardware",
    status: "In Progress",
    amount: "$150",
  },
  {
    profile: "https://example.com/profile3.jpg",
    name: "Fulkumari",
    date: "2024-01-10",
    brand: "HP",
    model: "Pavilion",
    title: "Virus Removal",
    category: "Desktop",
    issueType: "Software",
    status: "Pending",
    amount: "$100",
  },
  {
    profile: "https://example.com/profile4.jpg",
    name: "Ram peyari",
    date: "2024-05-15",
    brand: "Asus",
    model: "ROG",
    title: "Motherboard Repair",
    category: "Desktop",
    issueType: "Hardware",
    status: "Completed",
    amount: "$250",
  },
  {
    profile: "https://example.com/profile5.jpg",
    name: "hari bahadur",
    date: "2023-11-13",
    brand: "Lenovo",
    model: "ThinkPad",
    title: "Software Upgrade",
    category: "Laptop",
    issueType: "Software",
    status: "In Progress",
    amount: "$80",
  },
];

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/issues")
      .then((response) => {
        console.log(response);
        setFilteredData(response.date);
      })
      .catch((error) => {
        console.error("Error faching data:", error);
      });
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);

    const filtered = tableData.filter((row) => {
      return (
        row.name.toLowerCase().includes(value) ||
        row.date.includes(value) ||
        row.brand.toLowerCase().includes(value) ||
        row.model.toLowerCase().includes(value) ||
        row.category.toLowerCase().includes(value) ||
        row.issueType.toLowerCase().includes(value) ||
        row.status.toLowerCase().includes(value)
      );
    });
    setFilteredData(filtered);
  };

  // Handle date sorting
  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sortedData = [...filteredData];
    if (value === "asc") {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (value === "desc") {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setFilteredData(sortedData);
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md text-xl">
      <Tabletop
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        handleSort={handleSort}
      />

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gradient-to-r from-slate-900 to-slate-500 text-white">
            <tr className="text-left font-medium text-lg">
              <th className="py-3 px-6">Profile</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Brand</th>
              <th className="py-3 px-6">Model</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">issueType</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6">More Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className={`text-sm font-medium transition duration-300 ease-in-out ${
                  index % 2 === 0 ? "bg-gray-300" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="py-4 px-6">
                  <img
                    src={row.profile}
                    className="rounded-full h-[50px] w-[50px] "
                  />
                </td>
                <td className="py-4 px-6">{row.name}</td>
                <td className="py-4 px-6">{row.date}</td>
                <td className="py-4 px-6">{row.brand}</td>
                <td className="py-4 px-6">{row.model}</td>
                <td className="py-4 px-6">{row.title}</td>
                <td className="py-4 px-6">{row.category}</td>
                <td className="py-4 px-6">{row.issueType}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-2 py-1 rounded-2xl text-xs font-semibold 
                      ${
                        row.status === "Completed"
                          ? "bg-green-500 text-white"
                          : row.status === "In Progress"
                          ? "bg-yellow-500 text-white"
                          : row.status === "Pending"
                          ? "bg-red-500 text-white"
                          : ""
                      }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-6">{row.amount}</td>
                <td className="py-4 px-6">
                  <a href="#" className="text-blue-600 hover:underline">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
