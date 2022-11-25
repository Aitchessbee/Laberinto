import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { proxy } from "../../actions/types";
import axios from "axios"
import { getTeamsForHint } from "../../actions/questions";

import "./hint.css"
import MyOffers from "./components/MyOffers"
import MakeOfferTest from "./MakeOfferTest"
import ReceivedOffers from "./components/ReceivedOffers";


function Hint() {
    const [teamsData, setTeamsData] = useState([]);
    const [menuItem, setMenuItem] = useState('1');
    // const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    console.log(auth)

    // const search = useLocation().search;
    const path = window.location.pathname
    const pathArray = path.split("/");
    const questionId = pathArray[pathArray.length - 1];

    console.log("question id", questionId);
    
    // useEffect(() => {

    //     const getTeamsForHint = async () => {
            

    //         const config = {
    //             headers: {
    //                 'Authorization': `Token ${auth.key}`,
    //             }
    //         }
    //         const body = {
    //             "qID":`${questionId}`
    //         }
        
    //         try {
    //             const res = await axios.post(proxy + '/api/trade/teams/', body, config)
    //             console.log(res)

    //             setTeamsData(res.data.map(team => {
    //                 return (
    //                     <div>{team.teamName}</div>
    //                 )
    //             }))
    
    //         } catch (error) {
    //             console.log(error)
    //         }
        
    //     }   

    //     getTeamsForHint();

    // }, [])
    
    useEffect(() => {
        console.log("menu item changed")
        console.log(menuItem,questionId)
    }, [menuItem]);

    function renderMenuItem(someVariable,questionId){
        switch(someVariable){
            case '1': 
                return <MakeOfferTest questionId={questionId} />
            
            case '2': 
                return <ReceivedOffers questionId={questionId}/>
            
            case '3':
                return <MyOffers questionId={questionId}/>
        }
    }

    console.log(menuItem == 2?"hint-menu-item Selected":"");

    return (
        <div className="hint-container">
            <div className="hints-menu">
                <div className={menuItem === '1'?"hint-menu-item Selected":"hint-menu-item"} onClick={() => setMenuItem('1')}>Make Offer</div>
                <div className={menuItem === '2'?"hint-menu-item Selected":"hint-menu-item"} onClick={() => setMenuItem('2')}>Received Offers</div>
                <div className={menuItem === '3'?"hint-menu-item Selected":"hint-menu-item"} onClick={() => setMenuItem('3')}>My Offers</div>
            </div>
            {menuItem === '1' && <MakeOfferTest questionId={questionId}/>}
            {menuItem === '2' && <ReceivedOffers questionId={questionId}/>}
            {menuItem === '3' && <MyOffers questionId={questionId}/>}
            {/* {() => renderMenuItem(menuItem,questionId)} */}

            
        </div>
    )
}

export default Hint