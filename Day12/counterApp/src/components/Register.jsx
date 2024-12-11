import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Register = ({ regData }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const data = { name, email, password };
  const handleregister = (e) => {
    e.preventDefault();
    alert("User Registered successfully");
    regData(data);
  };
  return (
    <div>
      {JSON.stringify(data)}
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button onClick={handleregister} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;