import {ADD_TASK, REMOVE_TASK, TOGGLE_COMPLETE, EDIT_TASK} from '../Action/action' ;

const initialState = {
    task: [{
        id: 0 ,
        text: "Learn Reac-Redux" ,
        isComplete: false ,
    }]
}

const Reducer = (state = initialState , action) => {

    switch (action.type)
    {
        case ADD_TASK :
        return {
            ...state, task: [action.payload, ...state.task]
        }
    
    
        case REMOVE_TASK :
        return {
            ...state, task: state.task.filter((task)=> task.id !==action.payload)
        }
    
    
        case TOGGLE_COMPLETE :
        return {
            ...state, task: state.task.map((task) => task.id === action.payload ? {...task, isComplete: !task.isComplete} : task)
        }
    
    
        case EDIT_TASK :
        return {
            ...state, task: state.task.map((task) => task.id === action.payload.id ? action.payload : task)
        }

        default :
        return state 
    }
}

export default Reducer ;
