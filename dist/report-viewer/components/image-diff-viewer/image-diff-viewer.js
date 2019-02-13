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
const css = require("./image-diff-viewer.scss");
const diff_slider_1 = require("./diff-slider");
const diff_blend_1 = require("./diff-blend");
const diff_side_by_side_1 = require("./diff-side-by-side");
const cx = classNames.bind(Object.assign({}, bulma, css));
var Tab;
(function (Tab) {
    Tab["Slider"] = "slider";
    Tab["SideBySide"] = "side-by-side";
    Tab["Blend"] = "blend";
})(Tab || (Tab = {}));
let ImageDiffViewer = class ImageDiffViewer extends React.Component {
    constructor() {
        super(...arguments);
        this.tab = Tab.Slider;
    }
    get sliderTabActive() { return this.tab === Tab.Slider; }
    get sideBySideTabActive() { return this.tab === Tab.SideBySide; }
    get blendTabActive() { return this.tab === Tab.Blend; }
    handleSliderTabClick() { this.tab = Tab.Slider; }
    handleBlendTabClick() { this.tab = Tab.Blend; }
    handleSideBySideTabClick() { this.tab = Tab.SideBySide; }
    renderDiff() {
        const { received, snapshot, diff, width, height } = this.props;
        switch (this.tab) {
            case Tab.Slider:
                return (React.createElement(diff_slider_1.DiffSlider, { received: received, snapshot: snapshot, diff: diff, width: width, height: height }));
            case Tab.Blend:
                return (React.createElement(diff_blend_1.DiffBlend, { received: received, snapshot: snapshot, diff: diff, width: width, height: height }));
            case Tab.SideBySide:
                return (React.createElement(diff_side_by_side_1.DiffSideBySide, { received: received, snapshot: snapshot, diff: diff, width: width, height: height }));
        }
    }
    render() {
        return (React.createElement("article", null,
            React.createElement("div", { className: cx("tabs", "is-toggle", "is-center", "is-fullwidth") },
                React.createElement("ul", null,
                    React.createElement("li", { className: cx({ "is-active": this.sliderTabActive }) },
                        React.createElement("a", { onClick: this.handleSliderTabClick }, "Slider")),
                    React.createElement("li", { className: cx({ "is-active": this.sideBySideTabActive }) },
                        React.createElement("a", { onClick: this.handleSideBySideTabClick }, "Side-by-side")),
                    React.createElement("li", { className: cx({ "is-active": this.blendTabActive }) },
                        React.createElement("a", { onClick: this.handleBlendTabClick }, "Blend")))),
            this.renderDiff()));
    }
};
__decorate([
    mobx_1.observable
], ImageDiffViewer.prototype, "tab", void 0);
__decorate([
    mobx_1.computed
], ImageDiffViewer.prototype, "sliderTabActive", null);
__decorate([
    mobx_1.computed
], ImageDiffViewer.prototype, "sideBySideTabActive", null);
__decorate([
    mobx_1.computed
], ImageDiffViewer.prototype, "blendTabActive", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], ImageDiffViewer.prototype, "handleSliderTabClick", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], ImageDiffViewer.prototype, "handleBlendTabClick", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], ImageDiffViewer.prototype, "handleSideBySideTabClick", null);
ImageDiffViewer = __decorate([
    mobx_react_1.observer
], ImageDiffViewer);
exports.ImageDiffViewer = ImageDiffViewer;
//# sourceMappingURL=image-diff-viewer.js.map