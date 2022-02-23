import React, {useState} from 'react';
import StatusButton from './StatusButton'
 
const ToDo = props => {
    const [toDo, setToDo] = useState(props);
    console.log(toDo.todo)
   return (
       <div>
           {toDo.todo.description} - <StatusButton todo={toDo.todo} />
       </div>
   );
};
 
export default ToDo;