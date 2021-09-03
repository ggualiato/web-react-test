import { WealthSummary } from "../interfaces/WealthSummary";

export enum WealthSummaryActions {
    SET_WEALTH_SUMMARIES = "SET_WEALTH_SUMMARIES",
    SET_WEALTH_SUMMARY = "SET_WEALTH_SUMMARY",
}

export const setWealthSummaries = (wealthSummaries: WealthSummary[]) => ({
    type: WealthSummaryActions.SET_WEALTH_SUMMARIES,
    wealthSummaries,
});

export const setWealthSummary = (id: number) => ({
    type: WealthSummaryActions.SET_WEALTH_SUMMARY,
    id,
});
