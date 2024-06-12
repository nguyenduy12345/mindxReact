import React from 'react'
import ListSv from './components/ListSv'
import Modal from './components/Modal'
import './App.css'

//DATA
const listSv = [
  {id: 1, name: "Nguyễn Đức Kiên", money: 0, notes: ""},
  {id: 2, name: "Nguyễn Minh Hiển", money: 20000, notes: "Không nộp bài"},
  {id: 3, name: "Nguyễn Xuân Nguyên", money: 0, notes: ""},
  {id: 4, name: "Hoàng Kim Ngân", money: 0, notes: ""},
  {id: 5, name: "Lê Minh Hiếu", money: 0, notes: ""},
  {id: 6, name: "Hoàng Thái Linh", money: 0, notes: ""},
  {id: 7, name: "Lê Hoài Nam", money: 0, notes: ""},
  {id: 8, name: "Nguyễn Văn Duy", money: 0, notes: ""},
  {id: 9, name: "Nguyễn Văn Tuấn Anh", money: 0, notes: ""},
  {id: 10, name: "Trần Huy Cường", money: 0, notes: ""},
  {id: 11, name: "Nguyễn Viết Thái", money: 20000, notes: "Không làm bt"},
  {id: 12, name: "Quan Vĩ Dân", money: 20000, notes: "Không làm bt, không có trong lớp"},
  {id: 13, name: "Đặng Minh Nhật", money: 0, notes: ""},
  {id: 14, name: "Nguyễn Gia Huy", money: 0, notes: ""},
  {id: 15, name: "Phạm Đức Tài", money: 0, notes: ""},
  {id: 16, name: "Đinh Văn Thành Đạt", money: 0, notes: ""},
  {id: 17, name: "Cao Lê Thành Công", money: 0, notes: ""},
]

function App() {
  const [openModal, setOpenModal] = React.useState(false)
  const [listPerson, setListPerson] = React.useState(listSv)
  const [curInfo, setCurInfo] = React.useState(null)
  function handleCurInfo(item){
    setCurInfo(item)
    setOpenModal(true)
  }
  return (
    <>
      {openModal && <Modal data={curInfo} closeModal={setOpenModal} />}
      <div className="list_people">
        {listPerson.map((item, index) =>(
          <ListSv key={index} handleCurInfo={() => handleCurInfo(item)} setModal={setOpenModal} id={item.id} name={item.name} money={item.money} notes={item.notes} />
        ))}
      </div>
    </>
  )
}

export default App
