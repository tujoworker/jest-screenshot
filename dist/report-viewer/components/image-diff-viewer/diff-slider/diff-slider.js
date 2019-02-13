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
const tsdi_1 = require("tsdi");
const mobx_1 = require("mobx");
const classNames = require("classnames/bind");
const lodash_decorators_1 = require("lodash-decorators");
const css = require("./diff-slider.scss");
const cx = classNames.bind(Object.assign({}, bulma, css));
let DiffSlider = class DiffSlider extends React.Component {
    constructor() {
        super(...arguments);
        this.dragging = false;
        this.sliderX = 0.5;
        this.diffOpacity = 0.5;
    }
    initialize() {
        const rerender = () => {
            this.forceUpdate();
            this.adjustSizes();
        };
        window.addEventListener("resize", rerender);
        mobx_1.reaction(() => this.ui.menuVisible, () => {
            setTimeout(() => rerender(), 0);
        });
    }
    get aspectRatio() { return this.props.height / this.props.width; }
    handleDragStart(event) {
        this.dragging = true;
        this.slide(event);
    }
    handleDragStop() { this.dragging = false; }
    handleDrag(event) {
        if (!this.dragging) {
            return;
        }
        this.slide(event);
    }
    slide(event) {
        const { left, width } = this.container.getBoundingClientRect();
        this.sliderX = (event.clientX - left) / width;
        event.stopPropagation();
        event.preventDefault();
    }
    refContainer(element) {
        this.container = element;
        this.adjustSizes();
    }
    refImageReceived(element) {
        this.imageReceived = element;
        this.adjustSizes();
    }
    refImageSnapshot(element) {
        this.imageSnapshot = element;
        this.adjustSizes();
    }
    refImageDiff(element) {
        this.imageDiff = element;
        this.adjustSizes();
    }
    adjustSizes() {
        if (!this.imageDiff || !this.container || !this.imageReceived || !this.imageSnapshot) {
            return;
        }
        const { width: containerWidth } = this.container.getBoundingClientRect();
        const containerHeight = this.aspectRatio * containerWidth;
        this.container.style.height = `${containerHeight}px`;
        [this.imageDiff, this.imageReceived, this.imageSnapshot].forEach(image => {
            image.width = containerWidth;
            image.height = containerHeight;
            image.style.width = `${containerWidth}px`;
            image.style.height = `${containerHeight}px`;
        });
    }
    handleDiffOpacity(event) {
        this.diffOpacity = Number(event.currentTarget.value);
    }
    render() {
        const { received, snapshot, diff } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement("nav", { className: cx("level", "settings") },
                React.createElement("div", { className: cx("level-item", "has-text-centered") },
                    React.createElement("div", null,
                        React.createElement("div", { className: cx("heading") }, "Diff Opacity"),
                        React.createElement("input", { className: cx("title"), type: "range", min: 0, max: 1, step: "any", value: this.diffOpacity, onChange: this.handleDiffOpacity })))),
            React.createElement("div", { onMouseDown: this.handleDragStart, onMouseLeave: this.handleDragStop, onMouseUp: this.handleDragStop, onMouseMove: this.handleDrag, className: cx("viewer-container"), ref: this.refContainer },
                React.createElement("div", { className: cx("slider"), style: { left: `${this.sliderX * 100}%` } },
                    React.createElement("div", { className: cx("top") }),
                    React.createElement("div", { className: cx("bottom") })),
                React.createElement("div", { className: cx("viewer-diff") },
                    React.createElement("img", { ref: this.refImageDiff, src: diff, style: { opacity: this.diffOpacity } })),
                React.createElement("div", { className: cx("viewer-received"), style: { width: `${this.sliderX * 100}%` } },
                    React.createElement("img", { ref: this.refImageReceived, src: received })),
                React.createElement("div", { className: cx("viewer-snapshot") },
                    React.createElement("img", { ref: this.refImageSnapshot, src: snapshot })))));
    }
};
__decorate([
    tsdi_1.inject
], DiffSlider.prototype, "ui", void 0);
__decorate([
    mobx_1.observable
], DiffSlider.prototype, "dragging", void 0);
__decorate([
    mobx_1.observable
], DiffSlider.prototype, "sliderX", void 0);
__decorate([
    mobx_1.observable
], DiffSlider.prototype, "diffOpacity", void 0);
__decorate([
    tsdi_1.initialize
], DiffSlider.prototype, "initialize", null);
__decorate([
    mobx_1.computed
], DiffSlider.prototype, "aspectRatio", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], DiffSlider.prototype, "handleDragStart", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], DiffSlider.prototype, "handleDragStop", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], DiffSlider.prototype, "handleDrag", null);
__decorate([
    lodash_decorators_1.bind
], DiffSlider.prototype, "slide", null);
__decorate([
    lodash_decorators_1.bind
], DiffSlider.prototype, "refContainer", null);
__decorate([
    lodash_decorators_1.bind
], DiffSlider.prototype, "refImageReceived", null);
__decorate([
    lodash_decorators_1.bind
], DiffSlider.prototype, "refImageSnapshot", null);
__decorate([
    lodash_decorators_1.bind
], DiffSlider.prototype, "refImageDiff", null);
__decorate([
    lodash_decorators_1.bind
], DiffSlider.prototype, "adjustSizes", null);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], DiffSlider.prototype, "handleDiffOpacity", null);
DiffSlider = __decorate([
    tsdi_1.external, mobx_react_1.observer
], DiffSlider);
exports.DiffSlider = DiffSlider;
//# sourceMappingURL=diff-slider.js.map