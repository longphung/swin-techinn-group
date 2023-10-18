"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import classes from "./SubmitTest.module.css";

import Button from "../Button/Button";
import { toast } from "react-toastify";

const SubmitTest = () => {
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState("");
  const supabase = createClientComponentClient();

  const handleReset = () => {
    setDate(new Date());
    setResult("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      date: date,
      result: result === "positive",
    };
    const userData = await supabase.auth.getSession();
    const insertResult = await supabase.from("test_results").insert({
      date_acknowledged: data.date.toISOString(),
      test_results: data.result,
      user_id: userData?.data.session?.user.id,
    });
    if (insertResult.error) {
      console.log(insertResult.error);
      toast(`Error submitting test result ${insertResult.error.message}`, {
        type: "error",
      });
      return;
    }
    toast(`Successfully submitted test result`, {
      type: "success",
    });
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
