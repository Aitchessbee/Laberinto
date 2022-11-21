import React from "react";
import { useState } from "react";
import "./offermenu.css";

const Offermenu = ({ title, question, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <h3>{isActive ? "-" : "+"}</h3>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <p>{question}</p>
          <p>{content}</p>
          <form action="" method="post">
            <input type="text " placeholder="Enter answer" />
            <button className="btn" type="submit">
              Accept Offer
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Offermenu;
