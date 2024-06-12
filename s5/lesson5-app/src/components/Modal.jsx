import "./modal.css"
export default function Modal({data, setModal}){
    return (
        <>
            <div className="box_modal">
            <div className="header_modal" >
                <h3>Thông tin Pokemon</h3>
                <p onClick={() => setModal(false)}>X</p>
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
                    <input name="name" id="name" value={data.name}/>
                </div>
            </div>
            <div className="footer_modal">
                <button onClick={() => setModal(false)} className="btn_1">CLOSE</button>
                <button className="btn_2">SAVE</button>
            </div>
        </div>
        </>
    )
}