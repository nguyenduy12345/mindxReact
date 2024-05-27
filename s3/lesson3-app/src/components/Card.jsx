import img001 from '../assets/IMG/001.png'
import './card.css'

const listItem =[
    {
        src: img001,
        id: "#0001",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0002",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0003",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0004",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0005",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0006",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0007",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0008",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0009",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0010",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0011",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
    {
        src: img001,
        id: "#0012",
        name: "Bulbasaur",
        attribute: {
            attr1: "Grass",
            attr2: "Poison"
        }
    },
]
function Card(){
    return (
        <>
            {listItem.map(item => (
                <div className="card">
                    <div className="item">
                        <img src={item.src}/>
                        <div className="item_desc">
                            <p>{item.id}</p>
                            <h3>{item.name}</h3>
                            <div className="attribute_item">
                                <button class="btn_1">{item?.attribute?.attr1}</button>
                                <button class="btn_2">{item?.attribute?.attr2}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Card