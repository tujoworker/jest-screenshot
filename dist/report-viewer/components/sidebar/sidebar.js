"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bulma = require("bulma");
const classNames = require("classnames/bind");
const css = require("./sidebar.scss");
const mobx_react_1 = require("mobx-react");
const tsdi_1 = require("tsdi");
const file_list_1 = require("../file-list");
const cx = classNames.bind(Object.assign({}, bulma, css));
let Sidebar = class Sidebar extends React.Component {
    render() {
        if (!this.ui.menuVisible) {
            return null;
        }
        const classes = cx("column", "is-3", "section", "is-fullheight", "menu");
        return (React.createElement("aside", { className: classes },
            React.createElement("p", { className: cx("menu-label") }),
            React.createElement(file_list_1.FileList, null)));
    }
};
__decorate([
    tsdi_1.inject
], Sidebar.prototype, "ui", void 0);
Sidebar = __decorate([
    tsdi_1.external, mobx_react_1.observer
], Sidebar);
exports.Sidebar = Sidebar;
//# sourceMappingURL=sidebar.js.map