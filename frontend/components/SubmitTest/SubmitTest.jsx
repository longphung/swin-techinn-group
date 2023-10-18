"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import classes from "./SubmitTest.module.css";

import Button from "../Button/Button";

const SubmitTest = () => {
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState("");

  const handleReset = () => {
    setDate(new Date());
    setResult("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date: date,
      result: result,
    };
    console.log(data);
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.submitTestForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="test-date">Test Date:</label>
          <DatePicker
            id="test-date"
            name="test-date"
            selected={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </div>

        <div>
          <label htmlFor="results">Results:</label>
          <select
            className="form-control"
            id="results"
            name="results"
            required
            value={result}
            onChange={(e) => setResult(e.target.value)}
          >
            <option value="">Select Result</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="error">Error</option>
          </select>
        </div>
        <Button type="submit" variant="small">
          Submit
        </Button>
        <Button type="button" variant="small" onClick={handleReset}>
          Reset
        </Button>
      </form>
    </div>
  );
};

export default SubmitTest;
