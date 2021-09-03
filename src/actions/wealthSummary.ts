import { WealthSummary } from "../interfaces/WealthSummary";

export enum WealthSummaryActions {
    SET_WEALTH_SUMMARIES = "SET_WEALTH_SUMMARIES",
    SET_WEALTH_SUMMARY = "SET_WEALTH_SUMMARY",
}

export interface ActionSetWealthSummaries {
    type: WealthSummaryActions.SET_WEALTH_SUMMARIES;
    wealthSummaries: WealthSummary[];
}

export interface ActionSetWealthSummary {
    type: WealthSummaryActions.SET_WEALTH_SUMMARY;
    id: number;
}

export const setWealthSummaries = (wealthSummaries: WealthSummary[]): ActionSetWealthSummaries => ({
    type: WealthSummaryActions.SET_WEALTH_SUMMARIES,
    wealthSummaries,
});

export const setWealthSummary = (id: number): ActionSetWealthSummary => ({
    type: WealthSummaryActions.SET_WEALTH_SUMMARY,
    id,
});
