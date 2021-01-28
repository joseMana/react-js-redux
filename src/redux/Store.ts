import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import CounterReducer from "./CounterReducer";
import { CounterState } from "./CounterState";
import { CustomAction } from "./CustomAction";

interface SampleState {
    test: string
}

const sampleReducer = (state: SampleState = { test: ''}, action: CustomAction) => {
    return state;
}

export interface RootState {
    Counter: CounterState,
    Sample: SampleState
}
const combinedReducers: Reducer<RootState> = combineReducers<RootState>({ Counter: CounterReducer, Sample: sampleReducer});
const defaultRootState = (): RootState => ({ Counter: {Counter: 0}, Sample: {test: "Basic Redux App"}})
export const store = createStore(combinedReducers, defaultRootState(), applyMiddleware());