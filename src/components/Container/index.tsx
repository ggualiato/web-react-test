import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWealthSummaries } from "../../actions/wealthSummary";
import { WealthSummaryQueryResult } from "../../interfaces/WealthSummary";
import { QUERY_WEALTH_SUMMARY_LIST } from "../../queries/wealthSummary";
import Container from "./Container";

const WealthSummariesContainer = () => {
    const { data, error } = useQuery<WealthSummaryQueryResult>(QUERY_WEALTH_SUMMARY_LIST);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setWealthSummaries(data.wealthSummary));
        }
    }, [data]);

    if (error) {
        return <div>ERROR</div>;
    }

    return <Container />;
};

export default WealthSummariesContainer;
