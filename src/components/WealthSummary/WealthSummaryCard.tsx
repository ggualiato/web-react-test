import React, { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import ThreeDots from "../../assets/three-dots.svg";
import Button from "../Common/Button";

const classNamePrefix = "my-summary";

interface WealthSummaryProps {
    total: number;
    profitability?: number;
    gain: number;
    cdi: number;
}

export const WealthSummaryCard: FC<WealthSummaryProps> = (props) => {
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
                <span>{total?.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) || <Skeleton />}</span>
            </div>

            <div className={`${classNamePrefix}_summary-container`}>
                <div className="summary-item">
                    <span>Rentabilidade/mês</span>
                    {profitability?.toLocaleString("pt-br", {
                        style: "percent",
                        maximumFractionDigits: 3,
                        minimumFractionDigits: 2,
                    }) || <Skeleton width={100} />}
                </div>

                <div className="summary-item">
                    <span>CDI</span>
                    {cdi?.toLocaleString("pt-br", {
                        style: "percent",
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                    }) || <Skeleton width={100} />}
                </div>

                <div className="summary-item">
                    <span>Ganho/mês</span>
                    {gain?.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) || <Skeleton width={100} />}
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
