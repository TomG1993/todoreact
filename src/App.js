import react, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {

  const [toDos, setToDos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

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
    
    console.log(data);
}


  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;

