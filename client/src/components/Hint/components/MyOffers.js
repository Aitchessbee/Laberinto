import {useEffect, useState} from 'react';
import {useSelector} from "react-redux"
import axios from "axios"
import {proxy} from "../../../actions/types"
import MyOfferMenu from './MyOfferMenu';



function MyOffers({questionId}) {
  const [pendingOffers, setPendingOffers] = useState([]);
  const [acceptedOffers, setAcceptedOffers] = useState([]);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const getPendingOffers = async () => {
      const config = {
        headers: {
            'Authorization': `Token ${auth.key}`,
        }
      }

      try {
          const res = await axios.get(proxy + '/api/trade/pending-offers/', config)
          console.log(res)

          setPendingOffers(
                res.data.map((team) => {
                    return (
                        <div className="accordion">
                            
                            <MyOfferMenu
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
          console.log(error)
      }

    }

    getPendingOffers()
  }, [])

  useEffect(() => {
    const getAcceptedOffers = async () => {
      const config = {
        headers: {
            'Authorization': `Token ${auth.key}`,
        }
      }

      try {
          const res = await axios.get(proxy + '/api/trade/accepted-offers/', config)
          console.log(res)

          setAcceptedOffers(
                res.data.map((team) => {
                    return (
                        <div className="accordion">
                            
                            <MyOfferMenu
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
          console.log(error)
      }

    }

    getAcceptedOffers()
  }, [])




  return (
    <div>
      <h1 className='title'>Accepted Offers</h1>
      {acceptedOffers}
      <h1 className='title'>Pending Offers</h1>
      {pendingOffers}
    </div>
  )
}

export default MyOffers