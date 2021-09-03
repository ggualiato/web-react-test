import { gql } from "@apollo/client";

export const QUERY_WEALTH_SUMMARY_LIST = gql`
    query WealthSummaryList {
        wealthSummary {
            id
            total
            profitability
            hasHistory
            gain
            cdi
        }
    }
`;
