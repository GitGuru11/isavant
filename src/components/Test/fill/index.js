import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Woman from "../../../resources/imgs/womenWithForm.svg";
import "./style.css";

export default function Index() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (formData.email && formData.firstName && formData.lastName) {
      window.location.href = "/monster";
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="fill-container">
      <div className="fill-wrap">
        <img src={Woman}></img>
        <div className="input-container">
          <div className="fill-title">To get a copy of your results,</div>
          <div className="fill-subtitle">
            please fill in the following information
          </div>
          <div class="user-box">
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Volodymyr"
              type="text"
              required=""
            />
          </div>

          <div class="user-box">
            <label>Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Kondratiuk"
              type="text"
              required=""
            />
          </div>

          <div class="user-box">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="@"
              type="email"
              required=""
            />
          </div>

          <div class="user-box">
            <label>Birthday</label>
            <input placeholder="@" type="date" name="" required="" />
          </div>

          <div className="radio-group">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="male"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Interested in receiving our free newsletter where we share
                expert tips on learning?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="Yes"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Unlock the iSavant of an employee, mentee or student?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="Yes"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <Button
              color="secondary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => next()}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
