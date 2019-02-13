"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bulma = require("bulma");
const classNames = require("classnames/bind");
const file_list_entry_1 = require("./file-list-entry");
const cx = classNames.bind(bulma);
class FileList extends React.Component {
    render() {
        return (React.createElement("ul", { className: cx("menu-list") }, testResults.files.map(file => React.createElement(file_list_entry_1.FileListEntry, { key: file.testFilePath, file: file }))));
    }
}
exports.FileList = FileList;
//# sourceMappingURL=file-list.js.map