import React from "react";
import { shallow } from "enzyme";
import WealthSummaryCard from "../../../components/WealthSummary/WealthSummaryCard";

test("should render Button correctly", () => {
    const wrapper = shallow(
        <WealthSummaryCard total={30000} profitability={12.0} gain={5} cdi={102}></WealthSummaryCard>
    );
    expect(wrapper).toMatchSnapshot();
});
