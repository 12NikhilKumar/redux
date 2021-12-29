import {actionConstants} from './action';
const initState = {
    data : [
        {
            id:1,
            name:"dove",
            price:50,
            url:"",
            quantity:1,
        }
    ]
}
export function reducer(state = initState,action) {
    switch (action.type){
        case actionConstants.ADD_CART : {
            return {
                ...state,
                data : [...state.data,action.payload]
            }
        }
        case actionConstants.DELETE_CART : {
            return {
                ...state,
                data : state.data.filter((item)=>item.id !==action?.payload?.id)
            }
        }
        case actionConstants.INCREMENT_COUNT : {
            return {
                ...state,
                data : state.data.map((item)=>item.id === action?.payload?.id?{...item,quantity:item.quantity+1} :item)
            }
        }
        case actionConstants.DECREMENT_COUNT : {
            return {
                ...state,
                data : state.data.map((item)=>item.id === action?.payload?.id?{...item,quantity:item.quantity-1} :item)
            }
        }
        default: {
            return state
        }
    }
}