import React, {useState} from 'react';
import StatusButton from './StatusButton'
 
const ToDo = props => {
    const [toDo, setToDo] = useState(props);
   return (
       <div>
           {toDo.todo.description} - <StatusButton todo={toDo.todo} />
       </div>
   );
};
 
export default ToDo;