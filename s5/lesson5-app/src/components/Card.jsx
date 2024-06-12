import './card.css'
import React from 'react'
function Card(props){
    return (
        <>
            <div className="card" onClick={props.handleModal}>
                    <div className="item">
                        <img src={props.src}/>
                        <div className="item_desc">
                            <p>{props.id}</p>
                            <h3>{props.name}</h3>
                            <div className="attribute_item">
                                {props.property.map((prop, index) => (
                                    <button key={index} className={prop}>{prop}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Card