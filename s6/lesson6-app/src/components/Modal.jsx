import "./modal.css"
export default function Modal({data, closeModal, handleUpdateData, onSave}){
    return (
        <>
            <div className="box_modal">
            <div className="header_modal" >
                <h3>Thông tin Pokemon</h3>
                <p onClick={closeModal}>X</p>
            </div>
            <div className="container_modal">
                <div className="img_modal">
                    <img src={data.src}/>
                </div>
                <div className="description">
                    <h3>Tên: {data.name}</h3>
                    {data.property.map((prop, key) => 
                        <button key={key} className={prop}>{prop}</button>
                    )}
                    <br/>
                    <label htmlFor="name">Nhập thông tin: </label>
                    <input name="name" id="name" value={data.name} onChange={e =>{
                        let newData = {
                            ...data,
                            name : e.target.value
                        }
                        handleUpdateData(newData)
                    }}/>
                </div>
            </div>
            <div className="footer_modal">
                <button onClick={closeModal} className="btn_1">CLOSE</button>
                <button className="btn_2" onClick={onSave}>SAVE</button>
            </div>
        </div>
        </>
    )
}