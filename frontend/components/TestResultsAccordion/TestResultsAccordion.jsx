"use client";
import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { format } from "date-fns";
import classes from "./TestResultsAccordion.module.css";

const TestResultsAccordion = (props) => {
  console.log(props);
  return (
    <div className={classes.accordion}>
      <Accordion>
        {props.data.map((result) => (
          <AccordionItem
            key={result.testid}
            header={`Test ${format(
              new Date(result.created_at),
              "do LLL yyyy",
            )}`}
          >
            <p>Result: {result.test_results ? "Positive" : "Negative"}</p>
            <p>Advice: {result.test_advice || "Not available"}</p>
            <p>
              Review date:{" "}
              {result.review_date
                ? format(new Date(result.review_date), "do LLL yyyy")
                : "Not available"}
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TestResultsAccordion;
