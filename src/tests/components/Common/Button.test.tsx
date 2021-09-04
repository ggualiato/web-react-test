import React from "react";
import { shallow } from "enzyme";
import Button from "../../../components/Common/Button";

test("should render Button correctly", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
});
