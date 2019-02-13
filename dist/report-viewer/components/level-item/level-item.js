"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bulma = require("bulma");
const classNames = require("classnames/bind");
const cx = classNames.bind(bulma);
function LevelItem({ name, value }) {
    return (React.createElement("div", { className: cx("level-item", "has-text-centered") },
        React.createElement("div", null,
            React.createElement("p", { className: cx("heading") }, name),
            React.createElement("p", { className: cx("title") }, value))));
}
exports.LevelItem = LevelItem;
//# sourceMappingURL=level-item.js.map