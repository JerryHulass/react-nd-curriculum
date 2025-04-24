import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
/**
 * Create Login Component and its functionality
 * I want you to store the token in Local_Storage.
 */
export default function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
        "http://localhost:8080/api/users/login",
        formData
      );
      console.log("User was Successfully Logged in ", response.data);
      // if
      localStorage.setItem("token", response?.data?.token);
      setFormData({ username: "", email: "", password: "" }); // re - Router Signin Page
      setIsLoggedIn(() => true);
      navigate("/about");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      LOGIN
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Input your Email !"
        ></input>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Input your Password !"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
