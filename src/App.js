import React ,{useState} from 'react';
import './App.css';


function App() {
  let [toDos,setTodos]=useState([])
  let [todo,setTodo]=useState('')
  var today=new Date()
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  //const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <React.Fragment>
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {weekday[today.getDay()]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={todo} onChange={(e)=>{
          setTodo(e.target.value)
        }} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>{
          if(todo)
          setTodos([...toDos,{text:todo,status:false,id:Date.now(),date:today.getDate()}]);setTodo('')
        }}></i>
      </div>
      { toDos.map((value,i)=>{
        return( <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox"  onChange={(e)=>{
              console.log(e.target.checked)
                setTodos(toDos.filter((obj)=>{
                  if(obj.id===value.id)
                      obj.status=e.target.checked
                 return obj
                 
                }))

            }} name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" key={value.id} onClick={(e)=>{
              setTodos(toDos.filter((obj)=>{
                console.log(e.target.key)
                if(obj.id===value.id)
                  return false
                else
                  return true
              }))
            }}></i>
          </div>
        </div>
      </div>)
      })
     
    }
    </div>
    </React.Fragment>
  );
}

export default App;
