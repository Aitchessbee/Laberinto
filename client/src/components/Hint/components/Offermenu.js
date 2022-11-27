import React from "react";
import { useState } from "react";
import "./offermenu.css";
import axios from "axios"
import { proxy } from "../../../actions/types";
import { useSelector } from "react-redux";

const Offermenu = ({ title, question, content, offerId }) => {
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Accept Offer");
  const auth = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault()

    const config = {
      headers: {
        Authorization: `Token ${auth.key}`,
      },
    };
    const data = {
        "offerID": `${offerId}`,
    };

    try {
        const res = await axios.post(proxy + '/api/trade/accept-offer/', data, config)
        console.log(res)
        setButtonText("Accepted")

    } catch (error) {
        console.log(error)
        setButtonText("Error")
    }
  }

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
          <form action="" onSubmit={(e) => {submitHandler(e)}}>
            <button className="btn" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Offermenu;
