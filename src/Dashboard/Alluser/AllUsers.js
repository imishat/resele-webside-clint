import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Lodaing from "../../Shared/Lodaing";
import User from "./User";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch('https://server-to-side.vercel.app/users');
      const data = await res.json();
      return data;
    },
  });
  console.log(users)

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://server-to-side.vercel.app/user${id}`,{
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

  const handelUserVerify = (id) => {
    // console.log(id);

    fetch(`https://server-to-side.vercel.app/users/verify/${id}`, {
      method:"PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount > 0) {
          toast.success("verify Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Lodaing></Lodaing>;
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Verify</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
            key={user._id}
            user={user}
            handleDelete={handleDelete}
            handelUserVerify={handelUserVerify}
            
            >
            
            </User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
