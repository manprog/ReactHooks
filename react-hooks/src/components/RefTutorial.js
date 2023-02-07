import React from 'react'
import { useRef } from 'react'

export const RefTutorial = () => {

    const inputRef = useRef(null);

    const onClick = ()=> {
        inputRef.current.value = ""
    }

  return (
    <div><h1>RefTutorial</h1>
    <input ref={inputRef}/>
    <button onClick={onClick}>Click Me</button>
    </div>
  )
}
