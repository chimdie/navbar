import React, { useEffect } from 'react'
import axios from 'axios'



function Hero() {
    const rapidapi_key = '2066340786msh9d289ba07087918p1df09cjsn386844ef0cc8'
    const rapidapi_host = 'livescore6.p.rapidapi.com'
    const url = `https://livescore6.p.rapidapi.com/matches/v2/detail?Eid=315868&Category=soccer&LiveTable=false`
    // const options = {
    //     method: 'GET',
    //     url: 'https://livescore6.p.rapidapi.com/matches/v2/detail',
    //     params: {Eid: '315868', Category: 'soccer', LiveTable: 'false'},
    //     headers: {
    //       'x-rapidapi-key': '2066340786msh9d289ba07087918p1df09cjsn386844ef0cc8',
    //       'x-rapidapi-host': 'livescore6.p.rapidapi.com'
    //     }
    //   };

    // await axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });


    const handleSubmit = async (e) => {
        // e.preventDefault()
        const response = await axios.get(`${url}&${rapidapi_key}&${rapidapi_host}`)
        const {data} = response 
        console.log(data)
    }
    useEffect(() => {
        handleSubmit()
    })
    return (
        <div>
            
        </div>
    )
}

export default Hero
