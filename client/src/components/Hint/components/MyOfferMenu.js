import React from "react";
import { useState } from "react";
import "./offermenu.css";
import axios from "axios"

const MyOfferMenu = ({ title, question, content, offerId }) => {
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
          <p>Team Level: {content}</p>
        </div>
      )}
    </div>
  );
};

export default MyOfferMenu;
