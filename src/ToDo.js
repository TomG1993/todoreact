import React from 'react';
 
const ToDo = ({todo}) => {
    console.log(todo)
   return (
       <div>
           {todo.description} - <button>Status</button>
       </div>
   );
};
 
export default ToDo;