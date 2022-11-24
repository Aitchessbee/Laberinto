import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { proxy } from "../../actions/types";
import axios from "axios"
import { getTeamsForHint } from "../../actions/questions";



function Hint() {
    const teamsData = useState([]);
    // const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    console.log(auth)

    // const search = useLocation().search;
    const path = window.location.pathname
    const pathArray = path.split("/");
    const questionId = pathArray[pathArray.length - 1];

    console.log("question id", questionId);
    

    useEffect(() => {

        const getTeamsForHint = async () => {
            

            const config = {
                headers: {
                    'Authorization': `Token ${auth.key}`,
                }
            }
            const body = {
                "qID":`${questionId}`
            }
        
            try {
                const res = await axios.post(proxy + '/api/trade/teams/', body, config)
                console.log(res)
    
            } catch (error) {
                console.log("not enough points")
            }
        
        }   

        getTeamsForHint();

    }, [])
    


    

    return (
        <div>Hint</div>
    )
}

export default Hint