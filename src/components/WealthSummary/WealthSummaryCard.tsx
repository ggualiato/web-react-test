import React, { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import ThreeDots from "../../assets/three-dots.svg";
import Button from "../Common/Button";
import { currency, percent } from "../../utils/number";

const classNamePrefix = "wealth-summary-card";

interface WealthSummaryProps {
    total: number;
    profitability?: number;
    gain: number;
    cdi: number;
}

const WealthSummaryCard: FC<WealthSummaryProps> = (props) => {
    const [showMore, setShowMore] = useState(false);
    const { total, profitability, cdi, gain } = props;

    return (
        <div className={`${classNamePrefix}_container`}>
            <div className={`${classNamePrefix}_header`}>
                <span>Seu resumo</span>
                <button>
                    <img src={ThreeDots} />
                </button>
            </div>

            <div className={`${classNamePrefix}_total_container`}>
                <span>Valor investido</span>
                <span>{currency(total) || <Skeleton />}</span>
            </div>

            <div className={`${classNamePrefix}_summary-container`}>
                <div className="summary-item">
                    <span>Rentabilidade/mês</span>
                    {percent(profitability) || <Skeleton width={100} />}
                </div>

                <div className="summary-item">
                    <span>CDI</span>
                    {percent(cdi, { maximumFractionDigits: 2 }) || <Skeleton width={100} />}
                </div>

                <div className="summary-item">
                    <span>Ganho/mês</span>
                    {currency(gain) || <Skeleton width={100} />}
                </div>
            </div>

            <hr></hr>

            <footer>
                <Button onClick={() => setShowMore(!showMore)}>Ver Mais</Button>
            </footer>
            {showMore && props.children}
        </div>
    );
};

export default WealthSummaryCard;
