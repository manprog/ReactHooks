import {React, useState} from 'react'

export const ReducerTutorial = () => {

    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false);

    const incrementNum = ()=>{
        setCount(count+1);
    }

    const toogleText = ()=> {
        setShowText(!showText);
    }

  return (
    <div><h1>StateTutorial</h1>
    <h2>{count} <button onClick= {()=>{incrementNum(); toogleText() }} style={{color:'red', fontWeight:'bold', fontSize:20, cursor:'pointer'}}>Increment</button></h2>
    {showText ? (<h3>Odd number</h3>):(<h3>Even Number</h3>)}
</div>
  )
}