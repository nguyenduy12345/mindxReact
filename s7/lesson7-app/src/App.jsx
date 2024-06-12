import { useState } from 'react';
import './App.css';


function App() {
 const [listStudent, setListStudent] = useState([]);
 const [newStudent, setNewStudent] = useState({
   name: '',
   weight: 0,
 });
 const handleSubmit = (e) => {
   e.preventDefault();
   listStudent.push(newStudent)
   setListStudent([...listStudent])
 };
 return (
   <>

     <p>List rendering</p>
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Nhập tên học sinh"
         name="name"
         value={newStudent.name}
         onChange={(e) => {
           setNewStudent({
             ...newStudent,
             name: e.target.value,
           });
         }}
       />
       <br />
       <input
         type="text"
         name="weight"
         value={newStudent.weight}
         onChange={(e) => {
           setNewStudent({
             ...newStudent,
             weight: e.target.value,
           });
         }}
       />
       <br />
       <button>Submit</button>
     </form>
     {listStudent.map((item, index) => {
       return (
         <div key={index}>
           <span>{item.name}</span> - <span>Cân nặng: {item.weight}</span> <span>x</span>
         </div>
       );
     })}
   </>
 );
}


export default App;



