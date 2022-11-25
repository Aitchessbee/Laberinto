import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { proxy } from "../../../actions/types";


// const arrayOfTeams = [
//   {
//     teamName: "Team Name1",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name2",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name3",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name4",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name5",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name6",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name7",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name8",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
//   {
//     teamName: "Team Name9",
//     teamLevel: "level: 1",
//     teamMobNumber: "Contact:9876543219",
//     teamEmail: "helpme@thapar.edu",
//   },
// ];

function MakeOffer({ questionId }) {
  const [makeOffersList, setMakeOffersList] = useState([]);
  const [bidList, setBidList] = useState({});

  const auth = useSelector((state) => state.auth);


  const handleBid = (e, teamId) => {
    e.preventDefault();
    console.log("called");
    const bid = e.target.value;


    setBidList({ ...bidList, [teamId]: bid });
  }

  useEffect(() => {
    console.log(bidList);
  }, [bidList])

  const submitBid = async (e, teamId) => {
    e.preventDefault();
    console.log("request sent")
    console.log(bidList)
    console.log(bidList.teamId);
    const bid = bidList.teamId;
    const config = {
        headers: {
          Authorization: `Token ${auth.key}`,
        },
      };
    const data = {
        "qID": `${questionId}`,
        "toTeamID": `${teamId}`,
        "points": `${bid}`,
    };

    try {
        const res = await axios.post(proxy + '/api/trade/make-offer/', data, config)
        console.log(res)


    } catch (error) {
        console.log(error)
    }



  }


  useEffect(() => {
    const getTeamsForOffers = async () => {
      const config = {
        headers: {
          Authorization: `Token ${auth.key}`,
        },
      };
      const data = {
        qID: `${questionId}`,
      };

      try {
        const res = await axios.post(proxy + "/api/trade/teams/", data, config);
        console.log(res);

        setMakeOffersList(
            res.data.map((team) => (
                <>
                  <div
                    className="col-sponsor"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div
                      className="container"
                      ontouchstart="this.classList.toggle('hover');"
                    >
                      <div
                        className="front"
                        style={
                          {
                            // backgroundImage:
                            //   "url(https://res.cloudinary.com/dpphmkop0/image/upload/v1628444822/Sponsors/grid_1_sp-WEB_01_hy9t1k.png)",
                          }
                        }
                      >
                        <p className="title-front">{team.teamName}</p>
                        <p className="level">level: {team.level}</p>
                      </div>
                      <div className="back">
                        <div className="inner">
                          <p className="level">
                            Contact - {team.phone_no}
                            <br />
                            Email - {team.email}
                          </p>
                        <form action="">
                            <input type="number" placeholder="Place a bid" id="bid-input" onChange={(e) => handleBid(e, team.id)}/>
                            <button className="btn" type="submit" onClick={(e) => submitBid(e, team.id)}>
                                Submit Bid
                            </button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
        );
      } catch (error) {
        console.log(error);
      }
    };

    getTeamsForOffers();
  }, []);

  return (
    <div>
      <h1 className="title">Make Offer</h1>
      {makeOffersList}
    </div>
  );
}

export default MakeOffer;
