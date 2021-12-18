export const actionConstants = {
    INCREMENT_COUNT: "INCREMENT_COUNT",
    DECREMENT_COUNT: "DECREMENT_COUNT",
    MULTIPLE_COUNT: "MULTIPLE_COUNT",
    DVIDE_COUNT: "DVIDE_COUNT"
}
export const incrementCount = (amount)=>({
    type: actionConstants.INCREMENT_COUNT,
    payload: amount
})
export const decrementCount = (amount)=>({
    type: actionConstants.DECREMENT_COUNT,
    payload: amount
})
export const multiplyCount = (amount)=>({
    type: actionConstants.MULTIPLE_COUNT,
    payload: amount
})
export const divideCount = (amount)=>({
    type: actionConstants.DVIDE_COUNT,
    payload: amount
})