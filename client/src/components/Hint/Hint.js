import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { proxy } from "../../actions/types";
import axios from "axios"
import { getTeamsForHint } from "../../actions/questions";



function Hint() {
    const teamsData = useState([]);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const search = useLocation().search;
        const questionId = new URLSearchParams(search).get("id");



        dispatch(getTeamsForHint(auth.key, questionId))
        
    }, [])


    const auth = useSelector(state => state.auth)


    console.log(auth)

    return (
        <div>Hint</div>
    )
}

export default Hint