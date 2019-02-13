"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bulma = require("bulma");
const Ansi = require("ansi-to-react"); // tslint:disable-line
const classNames = require("classnames/bind");
const level_item_1 = require("../level-item");
const image_diff_viewer_1 = require("../image-diff-viewer");
const css = require("./snapshot.scss");
const cx = classNames.bind(Object.assign({}, bulma, css));
class Snapshot extends React.Component {
    get snapshot() { return this.props.snapshot; }
    render() {
        const { receivedPath, snapshotPath, diffPath, width, height } = this.snapshot;
        return (React.createElement("article", null,
            React.createElement("nav", { className: cx("level") },
                React.createElement(level_item_1.LevelItem, { name: "Total Pixels", value: String(this.snapshot.totalPixels) }),
                React.createElement(level_item_1.LevelItem, { name: "Changed Pixels", value: String(this.snapshot.changedPixels) }),
                React.createElement(level_item_1.LevelItem, { name: "Difference", value: `${(this.snapshot.changedRelative * 100).toFixed(2)}%` })),
            React.createElement("div", { className: cx("message", "test-message") },
                React.createElement("div", { className: cx("message-body") },
                    React.createElement(Ansi, null, this.snapshot.message))),
            React.createElement(image_diff_viewer_1.ImageDiffViewer, { received: receivedPath, snapshot: snapshotPath, diff: diffPath, width: width, height: height })));
    }
}
exports.Snapshot = Snapshot;
//# sourceMappingURL=snapshot.js.map