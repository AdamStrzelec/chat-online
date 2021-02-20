import React from "react";
import { render } from "react-dom";
import Root from './views/Root';
import MainTemplate from './templates/MainTemplate';
import './index.css';

function App() {
    return(
        <>
            <MainTemplate>
                <Root />
            </MainTemplate>
        </>
    )
}

render(<App />, document.getElementById("root"));