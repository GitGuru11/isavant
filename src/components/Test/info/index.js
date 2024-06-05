import React, { useState, useEffect } from "react";
import "./style.css"; // Import your custom CSS styles

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    studentFirstName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchClear = () => {
    setFormData({
      email: "",
      firstName: "",
      studentFirstName: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    if (formData.email && formData.firstName && formData.studentFirstName) {
      localStorage.setItem("userInfo", JSON.stringify(formData));
      window.location.href = "/parent";
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="info-container">
      <h1 className="info-title">✨Input your information!✨</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="studentFirstName"
          placeholder="Student First Name"
          value={formData.studentFirstName}
          onChange={handleChange}
        />
        <div className="button-group">
          <button
            type="button"
            onClick={handleSearchClear}
            className="search-clear-btn"
          >
            Search/Clear
          </button>
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
