import React from 'react'
import './App.css'

function App() {
  const [person, setPerson] = React.useState({name: "mindx", age: 1})
  const handlePerson = () =>{
    setPerson({
      ...person,
      age: person.age + 1
    })
  }
  return (
    <>
      <h1>name : {person.name}, age={person.age}</h1>
      <button onClick={handlePerson}>ADD AGE</button>
    </>
  )
}

export default App
