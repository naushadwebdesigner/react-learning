import React, { useState } from 'react'

const NavbarwithUseState = () => {

const [showMe, setShowme] = useState(true)

  return (
    <div>
      

        <h1 className={showMe ? "heading showme" : "heading"}>Hello naushad its me </h1>


        <button onClick={() => setShowme(!showMe)}>{showMe ? "Hide me" : "Show me"}</button>


    </div>
  )
}

export default NavbarwithUseState
