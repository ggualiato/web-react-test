import React, { FC, useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const NavBar: FC = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    useEffect(() => {
        if (darkModeEnabled) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [darkModeEnabled]);

    const onChange = (e: boolean) => {
        setDarkModeEnabled(e);
    };

    return (
        <nav>
            <span>Fliper Test</span>
            <DarkModeToggle onChange={onChange} checked={darkModeEnabled} />
        </nav>
    );
};

export default NavBar;
