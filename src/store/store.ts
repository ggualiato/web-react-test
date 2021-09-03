import { combineReducers, createStore } from "redux";
import { wealthSummaryReducer } from "../reducers/wealthSummary";

const reducers = combineReducers({
    wealthSummary: wealthSummaryReducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
