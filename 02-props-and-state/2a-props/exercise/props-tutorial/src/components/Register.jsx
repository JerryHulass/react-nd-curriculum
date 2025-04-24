import React from "react";
import { useState } from "react";
import axios from "axios";

/**
 * Create Login Component and its functionality
 * I want you to store the token in Local_Storage.
 */

export default function Register({ user, setUser }) {
  // state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      // keep old data
      ...prevData,
      // add my new data
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        formData
      );
      console.log("User was Successfully Created ", response);
      setFormData({ username: "", email: "", password: "" }); // re - Router Signin Page
    } catch (error) {
      console.error(error);
    }
  };

  console.log(formData);

  return (
    <div className="" style={{ margin: "10px", backgroundColor: "green" }}>
      REGISTER
      {/* // this is how we call the REGISTER FUNCTION */}
      <form onSubmit={handleSubmit}>
        <label>Username :</label>
        <input
          type="text"
          name="username"
          value={formData.username} // check this in a little
          onChange={handleChange} // function
          placeholder="Enter your Username"
        ></input>

        <label>Email :</label>
        <input
          type="text"
          name="email"
          value={formData.email} // check this in a little
          onChange={handleChange} // function
          placeholder="Enter your Email"
        ></input>

        <label>Password :</label>
        <input
          type="password"
          name="password"
          value={formData.password} // check this in a little
          onChange={handleChange} // function
          placeholder="Enter your Password"
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
