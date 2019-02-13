"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const bulma = require("bulma");
const classNames = require("classnames/bind");
const tsdi_1 = require("tsdi");
const components_1 = require("./components");
const tsdi = new tsdi_1.TSDI();
tsdi.enableComponentScanner();
const cx = classNames.bind(bulma);
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement(components_1.Navigation, null),
    React.createElement("div", { className: cx("columns") },
        React.createElement(components_1.Sidebar, null),
        React.createElement(components_1.Main, null))), document.getElementById("root"));
//# sourceMappingURL=index.js.map