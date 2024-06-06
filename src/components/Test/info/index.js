import React, { useState, useEffect } from "react";
import "./style.css"; // Import your custom CSS styles

const Index = () => {
  const [flag, setFlag] = useState(false);
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
    if (flag) {
      if (formData.studentFirstName) {
        localStorage.setItem("userInfo", JSON.stringify(formData));
        window.location.href = "/parent";
      } else {
        alert("invalid input");
      }
    } else {
      if (formData.email && formData.firstName) {
        setFlag(true);
      } else {
        alert("invalid input");
      }
    }
  };

  return (
    <div className="info-container">
      <h1 className="info-title">
        ✨Input{" "}
        <span style={{ color: flag ? "blue" : "red" }}>
          {flag ? "Student" : "Parent"}
        </span>{" "}
        information!✨
      </h1>
      <form onSubmit={handleSubmit} className="form">
        {!flag && (
          <div>
            <input
              type="email"
              name="email"
              placeholder="Parent Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="Parent First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
        )}

        {flag && (
          <input
            type="text"
            name="studentFirstName"
            placeholder="Student First Name"
            value={formData.studentFirstName}
            onChange={handleChange}
          />
        )}

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
