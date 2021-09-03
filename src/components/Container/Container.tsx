import React, { FC, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WealthSummaryCard } from "../WealthSummary/WealthSummaryCard";
import { RootState } from "../../store/store";
import { setWealthSummary } from "../../actions/wealthSummary";

const WealthSummaries: FC = () => {
    const { wealthSummaries, wealthSummaryId } = useSelector(({ wealthSummary }: RootState) => wealthSummary);
    const dispatch = useDispatch();

    const handleClick = (id: number) => {
        dispatch(setWealthSummary(id));
    };

    const wealthSummary = wealthSummaries.find((w) => w.id === wealthSummaryId);

    return (
        <Fragment>
            <WealthSummaryCard
                total={wealthSummary?.total}
                profitability={wealthSummary?.profitability}
                gain={wealthSummary?.gain}
                cdi={wealthSummary?.cdi}
            >
                {
                    <div className="show-more_container">
                        {wealthSummaries
                            .filter((summary) => summary.id !== wealthSummary.id)
                            .map((summary) => (
                                <button onClick={() => handleClick(summary.id)} key={summary.id}>
                                    Conta {summary.id}
                                </button>
                            ))}
                    </div>
                }
            </WealthSummaryCard>
        </Fragment>
    );
};

export default WealthSummaries;
