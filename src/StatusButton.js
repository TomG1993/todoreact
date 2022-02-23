import React, {useState, useEffect} from 'react';
 
const StatusButton = props => {

    const [toDo, setToDo] = useState(props);

    useEffect(()=>{
        if (toDo.todo.status === 0){
            setButtonText("Pending");
        }
        else{
            setButtonText("Completed");
        }
      }, [])

    const toggleStatus = async () => {
        console.log(toDo);
        const url = "https://localhost:7228/ToggleStatus";
        console.log(toDo.todo);
        const response = await fetch(url,
          {
            mode: 'cors',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Description: "",
              Status: toDo.todo.status,
              ID: toDo.todo.id
            })
          });
    
          const toDoRecord = await response.json();

          setToDo({...toDo, todo: {
              id : toDoRecord.id,
              description: toDoRecord.description,
              status: toDoRecord.status
          }});
      }

    const [buttonText, setButtonText] = useState("Pending");

    const toggle = () => {
        toggleStatus();
        if (toDo.todo.status === 0){
            setButtonText("Completed");
            //toDo.Status = 1;
        }
        else{
            setButtonText("Pending");
            //toDo.Status = 0;
        }
    }
    
    return (
    <span>
        <button onClick={() => toggle()}>{buttonText}</button>
    </span>
    );
};

export default StatusButton;