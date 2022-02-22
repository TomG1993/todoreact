import React from 'react';
import StatusButton from './StatusButton'
 
const ToDo = ({todo}) => {
    console.log(todo)
   return (
       <div>
           {todo.description} - <StatusButton status={todo} />
       </div>
   );
};
 
export default ToDo;