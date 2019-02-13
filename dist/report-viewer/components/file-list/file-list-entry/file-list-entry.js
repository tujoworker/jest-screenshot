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
const cx = classNames.bind(bulma);
let FileListEntry = class FileListEntry extends React.Component {
    get file() { return this.props.file; }
    get active() { return this.testFiles.isActive(this.file); }
    handleClick() {
        this.testFiles.selectFile(this.file);
    }
    render() {
        return (React.createElement("li", null,
            React.createElement("a", { className: cx({ "is-active": this.active }), onClick: this.handleClick }, this.file.testFilePath)));
    }
};
__decorate([
    tsdi_1.inject
], FileListEntry.prototype, "testFiles", void 0);
__decorate([
    mobx_1.computed
], FileListEntry.prototype, "file", null);
__decorate([
    mobx_1.computed
], FileListEntry.prototype, "active", null);
__decorate([
    mobx_1.action.bound
], FileListEntry.prototype, "handleClick", null);
FileListEntry = __decorate([
    mobx_react_1.observer, tsdi_1.external
], FileListEntry);
exports.FileListEntry = FileListEntry;
//# sourceMappingURL=file-list-entry.js.map