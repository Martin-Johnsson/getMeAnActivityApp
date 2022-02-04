import React from "react"
import {useState, useEffect} from "react"
import Axios from "axios"

function Activity() {
    const [activity, setActivity] = useState({});
    let radios = document.querySelectorAll('input[name="participantsRadio"]')
    let value = 0;
    let URL = "";

    radios.forEach((radio) => {
        if(radio.checked) {
            value = radio.value
        }
        return value;
    })

console.log(value)

value !== 0 ? URL="http://www.boredapi.com/api/activity?participants=" + value : URL="http://www.boredapi.com/api/activity/"

const [getActivity, setGetActivity] = useState(null)

useEffect(()=> {

    Axios.get(URL)
    .then((response) =>
 setActivity(response.data)

);

}, [getActivity])
 

let showActivity = () => {
    setGetActivity(getActivity+1)
}


  return (
    <div>
        <input type="radio" name="participantsRadio" id="1" value="1" />
            <label htmlFor="oneParticipant">One participant</label>
        <input type="radio" name="participantsRadio" id="2" value="2"/>
            <label htmlFor="twoParticipants">Two participants</label>
        <input type="radio" name="participantsRadio" id="4" value="4" />
            <label htmlFor="fourParticipants">Four participants</label>
        <br />
        <br />
        <button onClick={showActivity}>Get Activity</button>
        <h1>Activity: {activity.activity}</h1>
        <h2>Participants: {activity.participants}</h2>
        <h3>Type: {activity.type}</h3>
    </div>
  )
}

export default Activity;
