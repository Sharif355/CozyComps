import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [loggedUsers, setLoggedUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://sever-side-lit6jv4i9-sharif355.vercel.app/userInfos")
      .then((res) => setLoggedUsers(res.data));
  }, []);
  console.log(loggedUsers);

  const refetch = () => {
    axios
      .get("https://sever-side-lit6jv4i9-sharif355.vercel.app/userInfos")
      .then((res) => setLoggedUsers(res.data));
  };

  useEffect(() => {
    refetch();
  }, []);

  const handleAdmin = (user) => {
    axios
      .patch(
        `https://sever-side-lit6jv4i9-sharif355.vercel.app/users/${user._id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is a Admin`,
            showCloseButton: false,
            timer: 500,
          });
        }
      });
  };

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loggedUsers?.map((user, index) => (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th>{index + 1}</th>
                <td>
                  <img src={user.photo} alt={user.name} />
                </td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="bg-[#063970] px-3 py-2  rounded-md text-white hover:bg-[#638ab3]"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
