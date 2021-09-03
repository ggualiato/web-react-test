import { WealthSummaryActions, ActionSetWealthSummaries, ActionSetWealthSummary } from "../actions/wealthSummary";
import { WealthSummary } from "../interfaces/WealthSummary";

interface WealthSummaryReducer {
    wealthSummaries: WealthSummary[];
    wealthSummaryId?: number;
}

const wealthSummaryDefaulState: WealthSummaryReducer = {
    wealthSummaries: [],
    wealthSummaryId: undefined,
};

type Action = ActionSetWealthSummaries | ActionSetWealthSummary;

export const wealthSummaryReducer = (state = wealthSummaryDefaulState, action: Action): WealthSummaryReducer => {
    switch (action.type) {
        case WealthSummaryActions.SET_WEALTH_SUMMARIES:
            return {
                wealthSummaries: action.wealthSummaries,
                wealthSummaryId: action.wealthSummaries[0]?.id,
            };
        case WealthSummaryActions.SET_WEALTH_SUMMARY:
            return { ...state, wealthSummaryId: action.id };
        default:
            return state;
    }
};
