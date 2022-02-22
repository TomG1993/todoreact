import React, {useState} from 'react';
 
const StatusButton = ({toDo}) => {

    const [buttonText, setButtonText] = useState("Pending");

    const changeText = () => {
        if (toDo.status === 0){
            setButtonText("Completed");
            toDo.status = 1;
        }
        else{
            setButtonText("Pending");
            toDo.status = 0;
        }
    }
    
    return (
    <span>
        <button onClick={() => changeText()}>{buttonText}</button>
    </span>
    );
};

export default StatusButton;