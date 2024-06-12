import React from 'react'
import './App.css'
import Card from './components/Card'
import Modal from './components/Modal'
const listItemPokemon =[
  {
      src: "./IMG/001.png",
      id: "#0001",
      name: "Bulbasaur",
      property: ["Grass", "Poison"]
  },
  {
      src: "./IMG/002.png",
      id: "#0002",
      name: "Ivysaur",
      property: ["Grass", "Poison"]

  },
  {
      src: "./IMG/003.png",
      id: "#0003",
      name: "Venusaur",
      property: ["Grass", "Poison"]
  },
  {
      src: "./IMG/004.png",
      id: "#0004",
      name: "Charmander",
      property: ["Fire"]

  },
  {
      src: "./IMG/005.png",
      id: "#0005",
      name: "Charmeleon",
      property: ["Fire"]
  },
  {
      src: "./IMG/006.png",
      id: "#0006",
      name: "Charizard",
      property: ["Fire", "Flying"]
  },
  {
      src: "./IMG/007.png",
      id: "#0007",
      name: "Squirtle",
      property: ["Water"]
  },
  {
      src: "./IMG/008.png",
      id: "#0008",
      name: "Wartortle",
      property: ["Water"]

  },
  {
      src: "./IMG/009.png",
      id: "#0009",
      name: "Blastoise",
      property: ["Water"]
  },
  {
      src: "./IMG/010.png",
      id: "#0010",
      name: "Caterpie",
      property: ["Bug"]

  },
  {
      src: "./IMG/011.png",
      id: "#0011",
      name: "Metapod", property: ["Bug"]},
  {src: "./IMG/012.png",id: "#0012",name: "Butterfree",property: ["Bug", "Flying"]},
  { id: "#0013", name: "Weedle", property: ["Bug", "Poison"], src: "./IMG/013.png" },
  { id: "#0014", name: "Kakuna", property: ["Bug", "Poison"], src: "./IMG/014.png" },
  { id: "#0015", name: "Beedrill", property: ["Bug", "Poison"], src: "./IMG/015.png"},
  { id: "#0016", name: "Beedrill", property: ["Bug", "Poison"], src: "./IMG/015-Mega.png"}

]

function App() {
  const[listItem, setListItem] = React.useState(listItemPokemon)
  const[modal, setModal] = React.useState(false)
  const[dataModal, setDataModal] = React.useState(null)
  function handleModal(item){
    setModal(true)
    setDataModal(item)
  }
  return (
    <>
      {modal && <Modal data={dataModal} setModal={setModal} />}
      <h1>Bài 1</h1>
      <div className="list_item">
        {listItem.map(item => (
          <Card key={item.id} handleModal={() => handleModal(item)} id={item.id} name={item.name} property={item.property} src={item.src}/>
        ))}
      </div>
    </>
  )
}

export default App
