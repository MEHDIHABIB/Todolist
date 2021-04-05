import React from 'react' ;
import {connect} from 'react-redux' ;
import TaskCard from './TaskCard' ;

const ListTask = ({listTask}) => {
    
    return (
        <div>
            {listTask.map((el) => (
            <TaskCard key={el.id} task={el}/> 
            ))}

            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        listTask : state.task
    }
}

export default connect (mapStateToProps) (ListTask)
