import React from "react";
import { useState } from "react";
import "./offermenu.css";

const Offermenu = ({title,content}) => {
  
    const [isActive, setIsActive] = useState(false);
 

    return (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-content">{content}
          <br />
            <button className="btn" type="submit" >
              Accept Offer
            </button></div>}
        </div>
      );
    };


export default Offermenu;




