import React, { useState, useEffect } from "react";
import "./pageFive.css";
import Core from "../core";
import res_1 from "../../img/resource1_page_5.gif";

const TEXTS = [
  "Deliver outcomes that feel inevitable, as if your organization scripted its own future.",
  "Reduce indecision from weeks to moments.",
  "Discover latent avenues for growth in the midst of flux.",
];

function PageFive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    // Change text every 4 seconds:
    const interval = setInterval(() => {
      // 1) Start fading out
      setFadeState("fade-out");

      // 2) After fade-out finishes, swap to next text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
        setFadeState("fade-in");
      }, 500); // match the fade-out duration in CSS
    }, 4000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="page_container">
      <p className="tittle-page">Impact</p>

      <p className="paragraph-page">
        By the time others react, you’ve already advanced. Whether scaling
        global operations or venturing into untapped markets, your trajectory
        unfolds with intention rather than impulse.
      </p>

      <Core image={res_1} tittle="" description="" extraStyle="-dif2" />
      <p className={`paragraph-page-faded ${fadeState}`}>
        {TEXTS[currentIndex]}
      </p>
    </div>
  );
}

export default PageFive;
