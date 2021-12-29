export const actionConstants = {
    ADD_CART : 'ADD_CART',
    DELETE_CART : 'DELETE_CART',
    INCREMENT_COUNT : 'INCREMENT_COUNT',
    DECREMENT_COUNT : 'DECREMENT_COUNT'
}
export const addCart = ({name,id,price,url})=>({
    type: actionConstants.ADD_CART,
    payload : {
        id,
        name,
        price,
        url
    }
})
export const deleteCart = (id)=>({
    type: actionConstants.DELETE_CART,
    payload : {
        id: id
    }
})
export const incrementCount = (id)=>({
    type: actionConstants.INCREMENT_COUNT,
    payload: {
        id: id
    }
})
export const decrementCount = (id)=>({
    type: actionConstants.DECREMENT_COUNT,
    payload: {
        id: id
    }
})