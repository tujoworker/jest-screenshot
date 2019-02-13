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
const tsdi_1 = require("tsdi");
const mobx_react_1 = require("mobx-react");
const mobx_1 = require("mobx");
const failed_test_section_1 = require("../failed-test-section");
const cx = classNames.bind(bulma);
let Main = class Main extends React.Component {
    get headline() { return this.testFiles.activeFile.testFilePath; }
    render() {
        const classes = cx({
            "column": true,
            "is-9": this.ui.menuVisible,
            "is-12": !this.ui.menuVisible,
            "section": true,
            "is-fullheight": true,
        });
        if (!this.testFiles.activeFile) {
            return null;
        }
        return (React.createElement("main", { className: classes },
            React.createElement("h1", { className: cx("title") }, this.headline),
            this.testFiles.activeFile.failedTests.map(failedTest => {
                return (React.createElement(failed_test_section_1.FailedTestSection, { key: `${failedTest.titles.join("-")}`, failedTest: failedTest }));
            })));
    }
};
__decorate([
    tsdi_1.inject
], Main.prototype, "testFiles", void 0);
__decorate([
    tsdi_1.inject
], Main.prototype, "ui", void 0);
__decorate([
    mobx_1.computed
], Main.prototype, "headline", null);
Main = __decorate([
    mobx_react_1.observer, tsdi_1.external
], Main);
exports.Main = Main;
//# sourceMappingURL=main.js.map