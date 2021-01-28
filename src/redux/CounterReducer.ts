import { Action } from "redux";
import { Reducer } from "redux";
import { ADD_COUNTER, DECREMENT, INCREMENT, RESET } from "./ActionType";
import { CounterState } from "./CounterState";
import { CustomAction } from "./CustomAction";

const initialState: CounterState = {
    Counter: 0
}
const CounterReducer: Reducer<CounterState, CustomAction> = (state: CounterState = initialState, action: CustomAction) => {
    switch(action.type){
        case INCREMENT:
            return { Counter: state.Counter  + 1}
        case DECREMENT: 
            return { Counter: state.Counter - 1 }
        case RESET:
            return { Counter: 0}
        case ADD_COUNTER:
            return { Counter: state.Counter + action.payload}
        default:
            return state;
    }

}

export default CounterReducer;