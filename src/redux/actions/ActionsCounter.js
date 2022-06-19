import { typesCounter } from "../types"

export const actionIncrementarSync = (num) => {
    return {
        type: typesCounter.increment,
        payload: num
    }
}
export const actionDecrementarSync = (num) => {
    return {
        type: typesCounter.decrement,
        payload: num
    }
}

export const actionResetSync = (num) => {
    return {
        type: typesCounter.reset,
        
    }
}