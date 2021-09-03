import React, { FC } from "react";
import NavBar from "./Common/NavBar";
import WealthSummariesContainer from "./WealthSummaries";

const App: FC = () => {
    return (
        <div className="container">
            <NavBar />
            <div className="app-content">
                <WealthSummariesContainer />
            </div>
        </div>
    );
};

export default App;
