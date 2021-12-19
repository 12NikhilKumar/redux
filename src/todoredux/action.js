export const actionConstants = {
    ADD_TODO : "ADD_TODO",
    UPDATE_TODO : "UPDATE_TODO",
    DELETE_TODO : "DELETE_TODO",
    LOGIN_SUCCESS : "LOGIN_SUCCESS"
}
export const addTodo = ({title,status,description,id})=>({
    type: actionConstants.ADD_TODO,
    payload: {
        title,
        status,
        description,
        id
    }
});
export const deleteTodo = (id)=>({
    type: actionConstants.DELETE_TODO,
    payload: {
        id: id
    }
})
export const updateTodo = (id)=>({
    type: actionConstants.UPDATE_TODO,
    payload: {
        id: id
    }
})
export const loginSuccess = (token)=>({
    type: actionConstants.LOGIN_SUCCESS,
    payload:{
        token: token
    }
})
