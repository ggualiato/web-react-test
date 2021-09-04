import { WealthSummaryActions } from "../../actions/wealthSummary";
import { Action, wealthSummaryDefaulState, wealthSummaryReducer } from "../../reducers/wealthSummary";
import { wealthSummaries } from "../../mocks/wealth-summaries.json";

test("should set wealth summaries", () => {
    const action: Action = {
        type: WealthSummaryActions.SET_WEALTH_SUMMARIES,
        wealthSummaries: wealthSummaries,
    };
    const state = wealthSummaryReducer(wealthSummaryDefaulState, action);

    expect(state).toEqual({
        wealthSummaries: [...wealthSummaries],
        wealthSummaryId: wealthSummaries[0].id,
    });
});
