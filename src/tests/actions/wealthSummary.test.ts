import { setWealthSummaries, setWealthSummary, WealthSummaryActions } from "../../actions/wealthSummary";

test("should setup set wealth summaries action object", () => {
    const action = setWealthSummaries([{ cdi: 1, gain: 1, hasHistory: false, id: 1, total: 1, profitability: 1 }]);

    expect(action).toEqual({
        type: WealthSummaryActions.SET_WEALTH_SUMMARIES,
        wealthSummaries: [{ cdi: 1, gain: 1, hasHistory: false, id: 1, total: 1, profitability: 1 }],
    });
});

test("should setup set wealth summary action object", () => {
    const action = setWealthSummary(1);

    expect(action).toEqual({
        type: WealthSummaryActions.SET_WEALTH_SUMMARY,
        id: 1,
    });
});
