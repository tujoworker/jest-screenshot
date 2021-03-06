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
const mobx_react_1 = require("mobx-react");
const mobx_1 = require("mobx");
const classNames = require("classnames/bind");
const lodash_decorators_1 = require("lodash-decorators");
const css = require("./diff-blend.scss");
const cx = classNames.bind(Object.assign({}, bulma, css));
let DiffBlend = class DiffBlend extends React.Component {
    constructor() {
        super(...arguments);
        this.diffOpacity = 0.5;
        this.blendOpacity = 0.5;
    }
    handleDiffOpacity(event) {
        this.diffOpacity = Number(event.currentTarget.value);
    }
    handleBlendOpacity(event) {
        this.blendOpacity = Number(event.currentTarget.value);
    }
    render() {
        const { received, snapshot, diff } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement("nav", { className: cx("level", "settings") },
                React.createElement("div", { className: cx("level-item", "has-text-centered") },
                    React.createElement("div", null,
                        React.createElement("div", { className: cx("heading") }, "Blend"),
                        React.createElement("input", { className: cx("title"), type: "range", min: 0, max: 1, step: "any", value: this.blendOpacity, onChange: this.handleBlendOpacity }))),
                React.createElement("div", { className: cx("level-item", "has-text-centered") },
                    React.createElement("div", null,
                        React.createElement("div", { className: cx("heading") }, "Diff Opacity"),
                        React.createElement("input", { className: cx("title"), type: "range", min: 0, max: 1, step: "any", value: this.diffOpacity, onChange: this.handleDiffOpacity })))),
            React.createElement("div", { className: cx("viewer-container") },
                React.createElement("div", { className: cx("viewer-diff") },
                    React.createElement("img", { src: diff, style: { opacity: this.diffOpacity } })),
                React.createElement("div", { className: cx("viewer-received") },
                    React.createElement("img", { src: received, style: { opacity: this.blendOpacity } })),
                React.createElement("div", { className: cx("viewer-snapshot") },
                    React.createElement("img", { src: snapshot })))));
    }
};
__decorate([
    mobx_1.observable
], DiffBlend.prototype, "diffOpacity", void 0);
__decorate([
    mobx_1.observable
], DiffBlend.prototype, "blendOpacity", void 0);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], DiffBlend.prototype, "handleDiffOpacity", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], DiffBlend.prototype, "handleBlendOpacity", null);
DiffBlend = __decorate([
    mobx_react_1.observer
], DiffBlend);
exports.DiffBlend = DiffBlend;
//# sourceMappingURL=diff-blend.js.map