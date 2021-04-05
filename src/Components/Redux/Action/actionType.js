import {ADD_TASK, REMOVE_TASK, TOGGLE_COMPLETE, EDIT_TASK} from './action' ;

export const addtask = (newTask) => {
    return {
        type : ADD_TASK ,
        payload : newTask ,

    }
}

export const removetask = (id) => {
    return {
        type : REMOVE_TASK ,
        payload : id ,

    }
}

export const togglecomplete = (id) => {
    return {
        type : TOGGLE_COMPLETE ,
        payload : id ,

    }
}

export const edittask = (editedTask) => {
    return {
        type : EDIT_TASK ,
        payload : editedTask,

    }
}