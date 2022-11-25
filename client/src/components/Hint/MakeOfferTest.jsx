import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { proxy } from "../../actions/types";


export default function MakeOfferTest({ questionId }){
    const [makeOffersList,setMakeOffersList] = useState([]);
    const [bidList,setBidList] = useState({});

    const auth = useSelector(state => state.auth);

    useEffect(()=>{
        const getTeamsForOffers = async () => {
            const config = {
                headers:{
                    'Authorization':`Token ${auth.key}`
                }
            }
            const body = {
                qID: `${questionId}`,
            };

            try {
                const res = await axios.post(proxy + "/api/trade/teams/",body,config);
                console.log(res);

                setMakeOffersList(res.data);
            } catch (error){
                console.log(error);
            }
        }

        getTeamsForOffers();
    },[])

    const submitBid = async (e,teamId) => {
        e.preventDefault();
        console.log("request sent")
        console.log(bidList)
        console.log(bidList[teamId]);
        const bid = bidList[teamId];
        const config = {
            headers: {
            Authorization: `Token ${auth.key}`,
            },
        };

        const data = {
            "qID": `${questionId}`,
            "toTeamID": `${teamId}`,
            "points": parseInt(bid),
        };

        try {
            const res = await axios.post(proxy + '/api/trade/make-offer/', data, config)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const handleBid = (e,teamId) =>{
        // e.preventDefault();
        console.log("called");
        const bid = e.target.value;

        setBidList({
            ...bidList,
            [teamId]:bid
        })
    }

    return (
        <div>
            <h1 className="title">Make Offer</h1>
            {makeOffersList.map((team) => (
                <>
                    <div className="col-sponsor"
                    onTouchStart="this.classList.toggle('hover')">
                        <div className="container" onTouchStart="this.classList.toggle('hover')">
                            <div className="front">
                                <p className="title-front">{team.teamName}</p>
                                <p className="level">Level: {team.level}</p>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p className="level">
                                        Contact - {team.phone_no}
                                        <br />
                                        Email - {team.email}
                                    </p>
                                    <form action="" onSubmit={(e) => submitBid(e, team.id)}>
                                        <input type="number" placeholder="Place a bid" id="bid-input" onChange={(e) => handleBid(e, team.id)}/>
                                        <button className="btn" type="submit">
                                            Submit Bid
                                        </button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                </>
            ))}
        </div>
    )
}