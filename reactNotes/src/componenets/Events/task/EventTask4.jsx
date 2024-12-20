import React, { useState } from "react";

const EventTask4 = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
  });

  let [users, setUsers] = useState([]);

  let change = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleChange = (e) => {
    e.preventDefault();

    setState({
      username: "",
      password: "",
    });

    setUsers([...users, state]);
    console.log(users);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <form className="space-y-4" onSubmit={handleChange}>
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-2 border-[2px] border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={change}
            name="username"
            value={state.username}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border-[2px] border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={change}
            name="password"
            value={state.password}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      <hr className="my-6 border-gray-300" />

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Users</h3>
        {users.length === 0 ? (
          <p className="text-gray-500">No users added yet.</p>
        ) : (
          users.map((user, i) => (
            <div
              key={i}
              className="p-3 border rounded mb-3 bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700">
                <span className="font-medium">Username:</span> {user.username}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Password:</span> {user.password}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventTask4;
