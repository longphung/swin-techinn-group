"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

import classes from "./Register.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import useRegister from "./useRegister";

const Register = () => {
  const router = useRouter();
  const register = useRegister();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    suburb: "",
    gender: "male",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await register(formData);
      toast(
        "User registered successfully, please check your email for confirmation email",
        { type: "success" },
      );
      router.push("/login?message=register-sucess");
    } catch (e) {
      toast("Error registering user: " + e.message, { type: "error" });
    }
  };

  return (
    <div className={classes.registrationContainer}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className={classes.registrationForm}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Postcode</label>
          <input
            type="text"
            name="postcode"
            value={formData.suburb}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.formButton}>
          <Button type="submit" variant="small">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
