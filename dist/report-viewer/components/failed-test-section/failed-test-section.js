"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bulma = require("bulma");
const classNames = require("classnames/bind");
const snapshot_1 = require("../snapshot");
const cx = classNames.bind(bulma);
class FailedTestSection extends React.Component {
    get failedTest() { return this.props.failedTest; }
    render() {
        const { titles } = this.failedTest;
        return (React.createElement("section", { className: cx("section") },
            React.createElement("p", { className: cx("subtitle", "is-4") }, this.failedTest.titles.join(" ")),
            this.failedTest.failedSnapshots.map(snapshot => {
                return (React.createElement(snapshot_1.Snapshot, { key: `${snapshot.testName}-${snapshot.snapshotNumber}`, snapshot: snapshot }));
            })));
    }
}
exports.FailedTestSection = FailedTestSection;
//# sourceMappingURL=failed-test-section.js.map