import React, {useState, useEffect} from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList}) => {
const [newTodo, setNewTodo] = useState("");

const [toDos, setToDos] = useState([]);



useEffect(()=>{
  console.log("Working?")
  GetTodos();
}, [])

const GetTodos = async () =>{
const url = "https://localhost:7228/ToDo";
const response = await fetch(url,
  {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  var arr = [];
    Object.keys(data).forEach(function (key) {
      console.log(data[key]);

      arr.push(data[key]);
    });
    console.log(arr); // Not using arr before setting results in empty toDos.. must resolve one day
    setToDos(arr);
}



const handleNewToDo = async (e) => {

    const newToDoModel = await saveNewToDo();

    console.log("setting exercise")
    setToDos(currentToDos => [...currentToDos, newToDoModel]);

    setNewTodo("");
  }

  const saveNewToDo = async () => {
    const url = "https://localhost:7228/AddToDoRecord";
    const response = await fetch(url,
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Description: newTodo,
          Status: 0
        })
      });

      return await response.json();;
  }


   return (
       <div>
           {toDos.map(todo => {
               return (
                   <ToDo key={todo.id} todo={todo} />
               )
           })}
           <div>        
               <div><input
          placeholder="ToDo.."
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onBlur={e => handleNewToDo(e)}
        />
        </div></div>

       </div>

   );
};
 
export default ToDoList;