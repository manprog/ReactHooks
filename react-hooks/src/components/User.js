import React, {useContext}from 'react'

import { appContext } from './ContextTutorial'

export const User = () => {

    const {user} = useContext(appContext);

  return (
    <div>User: {user}
    </div>
  )
}
