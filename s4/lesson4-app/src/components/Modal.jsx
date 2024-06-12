import "./modal.css"

export default function Modal({closeModal, data}){
    return (
        <>
            <div className="box_modal">
            <div className="header_modal" >
                <h3>Thông tin sinh viên</h3>
                <p onClick={() => closeModal(false)}>X</p>
            </div>
            <div className="container_modal">
                <div className="img_modal">
                    <img src="./001.png"/>
                </div>
                <div className="description">
                    <h3>Tên: {data.name} </h3>
                    <p>Phạt: {data.money}VNĐ</p>
                    <label>Nhập thông tin: </label>
                    <input />
                </div>
            </div>
            <div className="footer_modal">
                <button onClick={() => closeModal(false)} className="btn_1">CLOSE</button>
                <button className="btn_2">SAVE</button>
            </div>
        </div>
        </>
    )
}