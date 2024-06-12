import './listSv.css'
export default function ListSv(props){
    return (
        <>  
            <div className="item" onClick={props.handleCurInfo}>
                <div className="item_number">{props.id}</div>
                <div className="item_des">
                    <h3>{props.name}</h3>
                    <p>Money : {props.money}</p>
                    <p>Notes: {props.notes}</p>
                </div>
            </div>
        </>
    )
}