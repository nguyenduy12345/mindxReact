import React from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";
const listItemPokemon = [
  {
    src: "./IMG/001.png",
    id: "#0001",
    name: "Bulbasaur",
    property: ["Grass", "Poison"],
    class: 'Grass'
  },
  {
    src: "./IMG/002.png",
    id: "#0002",
    name: "Ivysaur",
    property: ["Grass", "Poison"],
    class: 'Grass'
  },
  {
    src: "./IMG/003.png",
    id: "#0003",
    name: "Venusaur",
    property: ["Grass", "Poison"],
    class: 'Grass'
  },
  {
    src: "./IMG/004.png",
    id: "#0004",
    name: "Charmander",
    property: ["Fire"],
    class: 'Fire'
  },
  {
    src: "./IMG/005.png",
    id: "#0005",
    name: "Charmeleon",
    property: ["Fire"],
    class: 'Fire'
  },
  {
    src: "./IMG/006.png",
    id: "#0006",
    name: "Charizard",
    property: ["Fire", "Flying"],
    class: 'Fire'
  },
  {
    src: "./IMG/007.png",
    id: "#0007",
    name: "Squirtle",
    property: ["Water"],
    class: 'Water'
  },
  {
    src: "./IMG/008.png",
    id: "#0008",
    name: "Wartortle",
    property: ["Water"],
    class: 'Water'
  },
  {
    src: "./IMG/009.png",
    id: "#0009",
    name: "Blastoise",
    property: ["Water"],
    class: 'Water'
  },
  {
    src: "./IMG/010.png",
    id: "#0010",
    name: "Caterpie",
    property: ["Bug"],
    class: 'Bug'
  },
  {
    src: "./IMG/011.png",
    id: "#0011",
    name: "Metapod",
    property: ["Bug"],
    class: 'Bug'
  },
  {
    src: "./IMG/012.png",
    id: "#0012",
    name: "Butterfree",
    property: ["Bug", "Flying"],
    class: 'Bug'
  },
  {
    id: "#0013",
    name: "Weedle",
    property: ["Bug", "Poison"],
    src: "./IMG/013.png",
    class: 'Bug'
  },
  {
    id: "#0014",
    name: "Kakuna",
    property: ["Bug", "Poison"],
    src: "./IMG/014.png",
    class: 'Bug'
  },
  {
    id: "#0015",
    name: "Beedrill",
    property: ["Bug", "Poison"],
    src: "./IMG/015.png",
    class: 'Bug'
  },
  {
    id: "#0016",
    name: "Beedrill",
    property: ["Bug", "Poison"],
    src: "./IMG/015-Mega.png",
    class: 'Bug'
  }
];

function App() {
  const [listItem, setListItem] = React.useState(listItemPokemon);
  const [dataModal, setDataModal] = React.useState(null);
  const [pokeSearch, setPokeSearch] = React.useState("")
  const [dataSearch, setDataSearch] = React.useState(listItemPokemon)
  const [dataCheckBox, setDataCheckBox] = React.useState([])

  // create obj class item
  const listClassItem = {}
  dataSearch.map(item => listClassItem[item.class] = 1)

  // save new data modal
  const handleSave = () => {
    const index = listItem.findIndex((item) => item.id === dataModal.id);
    if (index > -1) {
      listItem[index] = dataModal
      setListItem([...listItem]);
      setDataModal(null);
    }
  };

  //handle searching 
  const handleSearching = () => {
    let resultSearching = listItem.filter(item => item.name.toLocaleUpperCase().includes(pokeSearch.toLocaleUpperCase()))
    setDataSearch(resultSearching)
  }

  // handle filter checkbox
  const handleFilterCheckBox = (e) => {
    let getIndexData = dataCheckBox.findIndex(data => data === e.target.value)
    if(getIndexData > -1){
      let result = dataCheckBox.filter(data => data !== dataCheckBox[getIndexData])
      setDataCheckBox(result)
    }else{
      setDataCheckBox([...dataCheckBox, e.target.value])
    }
  }
  
  // Item Filter CheckBox
  let resultCheckBox = dataSearch.filter(item => dataCheckBox.find(dataCheck => dataCheck === item.class))

  return ( 
    <>
      <input
        style={{width: '300px', height:"30px", marginLeft:'calc(50% - 200px)',marginTop: '20px', paddingLeft: '10px',border:'none', borderBottom:'1px solid black', outline: 'none'}} 
        type="text"
        placeholder="Searching..."
        value={pokeSearch}
        onChange={(e) => setPokeSearch(e.target.value)}
      />
      <button
        style={{padding: '6px 20px', marginLeft: '10px'}}
        onClick={handleSearching}
      >Searching</button>
      <h4>Filter</h4>
        {Object.keys(listClassItem).map((classItem, index) => (
          <div className="filter_item" key={index}>
            <input type="checkbox" id={classItem} value={classItem} onClick={e => handleFilterCheckBox(e)} />
            <label htmlFor={classItem}>{classItem}</label>
          </div>
        ))}
      {dataModal && (
        <Modal
          data={dataModal}
          handleUpdateData={(newData) => setDataModal(newData)}
          onSave={() => handleSave()}
          closeModal={() => setDataModal(null)}
        />
      )}
      <div className="list_item">
        {resultCheckBox.length > 0 ? resultCheckBox.map((item) => (
          <Card
            key={item.id}
            handleModal={() => setDataModal(item)}
            id={item.id}
            name={item.name}
            property={item.property}
            src={item.src}
          />
        )) : dataSearch.length > 0 ? dataSearch.map((item) => (
          <Card
            key={item.id}
            handleModal={() => setDataModal(item)}
            id={item.id}
            name={item.name}
            property={item.property}
            src={item.src}
          />
        )): <h1>CAN'T LOOKING FOR THAT ITEM</h1>}
      </div>
    </>
  );
}

export default App;
