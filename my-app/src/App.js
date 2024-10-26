
import './App.css';
import {useState} from 'react'

function App() {


  let [counter, setCounter] = useState(1);

  const addNumber = () => {

     
      setCounter(counter++)
     
    
  }

  const removeNumber = () => {
    if(counter > 0) {
      setCounter(counter--)
    }
  }


  return (
    

    <>
    
      <h1>
        Counter : {counter}
      </h1>

      <button onClick={addNumber}>Add Number</button>
      <button onClick={removeNumber}>Remove Number</button>

    
    </>

  );
}

export default App;
