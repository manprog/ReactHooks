import React, {useContext} from 'react'

import { appContext } from './ContextTutorial';

export const Login = () => {

    const {setUser} = useContext(appContext);
  return (
    <div>Login:
        <input onChange={(event)=>{ setUser(event.target.value);}}></input>
    </div>
  )
}
