import React, { useState } from 'react';
import {connect} from 'react-redux' ;
import {addtask} from './Redux/Action/actionType' ;

const AddTask = ({addtask}) => {
    const [text, setText] = useState("") ;
    const HandleSubmit = (e) =>{
        e.preventDefault() ;
        const newTask = {
            text: text ,
            id: Math.random(),
            isComplete: false
        }
        addtask(newTask) ;
        setText("")
    }
    return (
        <div>
            <input type="text" placeholder="Enter your task ..."
            value={text} 
            onChange={(e) => setText(e.target.value)} />
            <button onClick={(e) => {HandleSubmit(e)}}>Add</button>
        </div>
    )
}

export default connect (null, {addtask}) (AddTask)
