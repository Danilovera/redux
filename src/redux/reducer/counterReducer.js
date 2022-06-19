import { typesCounter } from "../types"

const initialState = {
    count:0
}

export const counterReducer = ( state = initialState, action) =>{

    switch (action.type) {
        case typesCounter.increment:
            return{ count: state.count + action.payload}

            case typesCounter.decrement:
            return { count: state.count - action.payload}

            case typesCounter.reset:
            return { count: initialState}
            
           
    
        default:
            return state
            
    }
}