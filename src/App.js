import {useState, useEffect} from 'react';
import './App.css';
/*import Person from './components/person';*/


const App =()  => {
const [counter,setCounter] = useState(0);

useEffect(() => {
alert('you just changed the counter to' + counter);
}, [counter]);

  return (
    <div className="App">
     {/* {person ()}*/}
      
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      
      
    </div>
  );
}

export default App;
