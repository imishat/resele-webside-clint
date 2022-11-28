

import React from "react";


import Lodaing from "../../Shared/Lodaing";
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllReport = () => {
  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await fetch("https://server-to-side.vercel.app/allReport");
      const data = await res.json();
      return data;
    },
  });
  // console.log(report);
  if (isLoading) {
    return <Lodaing></Lodaing>
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("You want to Delete This Report?");
    if (proceed) {
      fetch(`https://server-to-side.vercel.app/reports/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            // toast.error("Success Fully Deleted");
            toast.success("delete Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            refetch();
          }
        });
    }
  };

  
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Report Message</th>
            <th>Delete Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr>
              <td>{report.name}</td>
              <td>{report.username}</td>
              <td>{report.report}</td>
              <td>
                <button
                  onClick={() => handleDelete(report._id)}
                  className="bg-red-700  text-white py-1 px-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllReport;

