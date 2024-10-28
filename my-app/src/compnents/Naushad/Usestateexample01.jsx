import React, { useState } from 'react'

const Usestateexample01 = () => {

    const myBioData = [
        {
            id: 0,
            name:"Anoop",
            age: 34
        },
        {
            id: 1,
            name:"Naushad",
            age: 37
        },
        {
            id: 2,
            name:"Umakant",
            age: 45
        }
    ]

    const [myArray, setMyArray] = useState(myBioData)

    const clearArray = () => {
        if (myArray.length > 0) {
            setMyArray((prevArray) => prevArray.slice(1));
        }
    }

  return (
    <div>
      {
        myArray.map((elem) => <div className='list-items' key={elem.id}>Username : {elem.name}, Age {elem.age}</div>)
      }


      <button onClick={clearArray}>Clear Data</button>

    </div>
  )
}

export default Usestateexample01
