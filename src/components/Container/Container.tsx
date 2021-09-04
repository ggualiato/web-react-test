import React, { FC, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WealthSummaryCard } from "../WealthSummary/WealthSummaryCard";
import { RootState } from "../../store/store";
import { setWealthSummary } from "../../actions/wealthSummary";

const Container: FC = () => {
    const { wealthSummaries, wealthSummaryId } = useSelector(({ wealthSummary }: RootState) => wealthSummary);
    const dispatch = useDispatch();

    const handleClick = (id: number) => {
        dispatch(setWealthSummary(id));
    };

    const wealthSummary = wealthSummaries.find((w) => w.id === wealthSummaryId);

    const renderAccountsList = () => {
        return (
            <div className="accounts-list_container smooth-fade-in">
                {wealthSummaries
                    .filter((summary) => summary.id !== wealthSummary.id)
                    .map((summary) => (
                        <button onClick={() => handleClick(summary.id)} key={summary.id}>
                            Conta {summary.id}
                        </button>
                    ))}
            </div>
        );
    };

    return (
        <Fragment>
            <WealthSummaryCard
                total={wealthSummary?.total}
                profitability={wealthSummary?.profitability}
                gain={wealthSummary?.gain}
                cdi={wealthSummary?.cdi}
            >
                {renderAccountsList()}
            </WealthSummaryCard>
        </Fragment>
    );
};

export default Container;
