import {React, useReducer} from 'react'

const reducer = (state, action) =>{
    switch (action.type){
        case "INCREMENT":
            return {count : state.count+1, showText:state.showText}
        case "SHOWTEXT":
        return {count : state.count, showText: !state.showText}
        default:
            return state;
    }

}

export const ReducerTutorial = () => {

    const [state, dispatch] = useReducer(reducer, {count:0, showText:false})    

  return (
    <div><h1>ReducerTutorial</h1>
    <h2>{state.count} <button onClick= {()=>{dispatch({type:"INCREMENT"}); dispatch({type:"SHOWTEXT"});}} style={{color:'red', fontWeight:'bold', fontSize:20, cursor:'pointer'}}>Increment</button></h2>
    {state.showText ? (<h3>Odd number</h3>):(<h3>Even Number</h3>)}
</div>
  )
}
