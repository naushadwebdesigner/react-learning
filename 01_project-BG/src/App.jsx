

import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("")
  
 

  return (
    <>
      <div className='maindiv' style={{ backgroundColor: color }}>
        <div className='container'>
          
        <div className="colorPlats">

            <ul>
              <li onClick={() => setColor("red")}>red</li>
              <li onClick={() => setColor("green")}>green</li>
              <li onClick={() => setColor("yellow")}>yellow</li>
              <li onClick={() => setColor("orange")}>orange</li>
            </ul>

        </div>

        </div>
      </div>
    </>
  )
}

export default App
