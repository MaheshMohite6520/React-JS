import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Crud = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const change = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setUsers(
        users.map((user) => (user.id === editId ? { ...user, ...state } : user))
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setUsers([...users, { ...state, id: Date.now() }]);
    }

    setState({ username: "", password: "" });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setEditId(user.id);
    setState({ username: user.username, password: user.password });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center text-primary">
            {isEditing ? "Update User" : "User Form"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={state.username}
                onChange={change}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={state.password}
                onChange={change}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {isEditing ? "Update User" : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <h3 className="text-center text-secondary">Users</h3>
        {users.length === 0 ? (
          <p className="text-muted text-center">No users added yet.</p>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <p className="mb-0">
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p className="mb-0">
                    <strong>Password:</strong> {user.password}
                  </p>
                </div>
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Crud;
