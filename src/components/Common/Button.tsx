import React, { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button className="primary-button" {...props}>
            {props.children}
        </button>
    );
};

export default Button;
