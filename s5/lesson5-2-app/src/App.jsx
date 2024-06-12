import { useState, useEffect } from 'react'
import './App.css'
import Light from './components/Light'

function App() {
  const [curType, setCurType] = useState('red')
  const handleRunLight = () => {
    switch(curType){
      case 'red':
        setCurType('yellow')
        break;
      case 'yellow':
        setCurType('green')
        break;
      default:
        setCurType('red')
        break;
    }
  } 
  return (
    <>
      <ul className="box_light">
        <h1 style={{color: 'white'}}>Bài 2</h1>
        <li className={`box ${curType === "red" ? "red" : " " }`}/>
        <li className={`box ${curType === "yellow" ? "yellow" : " " }`}/>
        <li className={`box ${curType === "green" ? "green" : " " }`}/>
        <button onClick={handleRunLight}>RUN</button>
      </ul>
    </>
  )
}

export default App
