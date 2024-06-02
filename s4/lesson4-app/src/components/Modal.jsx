import "./modal.css"

export default function Modal({closeModal}){
    return (
        <>
        <div className="box_modal">
            <div className="header_modal" >
                <h3>MODAL TITLE</h3>
                <p onClick={() => closeModal(false)}>X</p>
            </div>
            <div className="container_modal">
                <h3>MODAL INFO</h3>
            </div>
            <div className="footer_modal">
                <button onClick={() => closeModal(false)} className="btn_1">CLOSE</button>
                <button className="btn_2">SAVE</button>
            </div>
        </div>
        </>
    )
}