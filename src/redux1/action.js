export const actionConstants = {
    INCREMENT_COUNT: "INCREMENT_COUNT",
    DECREMENT_COUNT: "DECREMENT_COUNT"
}
export const incrementCount = (amount)=>({
    type: actionConstants.INCREMENT_COUNT,
    payload: amount
})
export const decrementCount = (amount)=>({
    type: actionConstants.DECREMENT_COUNT,
    payload: amount
})