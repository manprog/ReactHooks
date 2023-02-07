import React, {useEffect, useState} from 'react'
import axios from "axios";

export const EffectTutorial = () => {

    const [email, setEmail] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            setEmail(response.data[0].email)})
    console.log("API was called!")
    }, [])

  return (
    <div><h1>EffectTutorial : </h1> <h2>{email}</h2></div>
  )
}
