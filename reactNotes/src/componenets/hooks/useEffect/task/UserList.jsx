import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-blue-500 text-center text-xl">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-center text-xl font-bold">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="user-list max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        User List
      </h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="user-item bg-white p-4 rounded-lg shadow-md"
          >
            <p className="text-lg font-semibold text-gray-700">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
