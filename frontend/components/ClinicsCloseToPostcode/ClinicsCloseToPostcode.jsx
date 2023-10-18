"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

const ClinicsCloseToPostcode = () => {
  const [showClinics, setShowClinics] = useState(false);

  const handleClick = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("You are at: ", position);
        setShowClinics(true);
      },
      (e) => {
        toast("Error getting your location: " + e.message, {
          type: "error",
        });
      },
    );
  };

  return (
    <div>
      <Button variant={"small"} onClick={handleClick}>
        Show clinics close to me
      </Button>
      {showClinics && (
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            initial={{ opacity: 0, height: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p>Here are the clinics close to you:</p>
            <ul>
              <li>123 Fake Street</li>
              <li>456 Fake Street</li>
              <li>789 Fake Street</li>
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default ClinicsCloseToPostcode;
