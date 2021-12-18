export const actionConstants = {
    ADD_TODO : 'ADD_TODO',
    UPDATE_TODO : 'UPDATE_TODO',
    DELETE_TODO : 'DELETE_TODO'
}
export const addTodo = ({title,status,id}) =>{
    return {
        type: actionConstants.ADD_TODO,
        payload: {
            title,
            status,
            id
        }

    };
};
export const updateTodo = (id) => ({
    type: actionConstants.UPDATE_TODO,
    payload: {
        id: id
    }
});
export const deleteTodo = (id) => ({
    type: actionConstants.DELETE_TODO,
    payload: {
        id: id
    }
})