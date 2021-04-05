import React from 'react' ;
import {connect} from 'react-redux' ;
import EditTask from './EditTask';
import {togglecomplete, removetask, edittask} from './Redux/Action/actionType'

const TaskCard = ({task, togglecomplete, removetask, edittask}) => {

    return (
        <div>
            <p style={ task.isComplete ? {textDecoration: "line-through"} : {}}>
            {task.text}
            </p>
            <button onClick={()=> togglecomplete(task.id)}>{task.isComplete ? "undo" : "Complete"}</button>
            <button onClick={()=> removetask(task.id)}>Delete</button>
            <EditTask Ptask={task}/>
        </div>
    )
}

export default connect (null, {togglecomplete, removetask, edittask}) (TaskCard)
