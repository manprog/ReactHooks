import React, { useState, createContext } from 'react'

import { Login } from './Login'
import { User } from './User'

// export const ContextTutorial = () => {

//     const [user, setUser] = useState();

//   return (
//     <div>
//         {/* <Login setUser={setUser}/><User user={user}/> */}
//     </div>
//   )
// }

export const appContext = createContext(null);

export const ContextTutorial = () => {

        const [user, setUser] = useState();
    
      return (
        <appContext.Provider value={{user, setUser}}>
            <Login/><User/>
        </appContext.Provider>
      )
    }
