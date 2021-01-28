import { Action } from "redux";
import { ADD_COUNTER, DECREMENT, INCREMENT, RESET } from "./ActionType";
import { CustomAction } from "./CustomAction";

export const IncrementAction = (): Action => ({
    type: INCREMENT
});

export const DecrementAction = (): Action => ({
    type: DECREMENT
});

export const ResetAction = (): Action => ({
    type: RESET
});

export const AddCounterAction = (value: number): CustomAction => ({
    type:ADD_COUNTER,
    payload: value
})