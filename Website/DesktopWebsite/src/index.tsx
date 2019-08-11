import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Entry } from "./js/components/presentational/Entry";
import { HashRouter } from "react-router-dom";
declare let module: any;

const rootElement = document.getElementById("root");
ReactDOM.render(<HashRouter><Entry /></HashRouter>, rootElement);

if (module.hot) {
    module.hot.accept();
}