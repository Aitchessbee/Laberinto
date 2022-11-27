import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { proxy } from "../../../actions/types";
import Offermenu from "./Offermenu";
import "./offermenu.css"

function ReceivedOffers({ questionId }) {
  const accordionData = [
    {
      title: "Team Name0",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name1",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name2",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name3",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name4",
      question: "why ?",
      content: `points offered :29`,
    },
  ];

  const [ReceivedOffers, setReceivedOffers] = useState([]);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const getReceivedOffers = async () => {
      const config = {
        headers: {
          Authorization: `Token ${auth.key}`,
        },
      };
      // const body = {
      //     // "qID":`${questionId}`
      //     status: "sent"
      // }

      try {
        const res = await axios.get(proxy + "/api/trade/received-offers/", config);
        console.log(res);

        setReceivedOffers(
        //   res.data.map((team) => {
            res.data.map((team) => {
                return (
                    <div className="accordion">
                        
                        <Offermenu
                            title={team.teamName + " - Bid:  " + team.points}
                            question={team.question}
                            content={team.level}
                            offerId={team.id}
                        />
                        
                    </div>
                );
            })
        //   })
        );
      } catch (error) {
        console.log(error);
      }
    };

    getReceivedOffers();
  }, []);

  return (
    <div className="accordion">
      <h1 className="title">Received Offers</h1>
      {ReceivedOffers}
    </div>
  );
}

export default ReceivedOffers;
