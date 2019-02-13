"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether the given input is a `SnapshotState` provided by jest.
 */
function isSnapshotState(obj) {
    if (typeof obj !== "object") {
        return false;
    }
    if (obj === null) {
        return false;
    }
    const { _counters, _updateSnapshot, updated, added } = obj;
    if (!(_counters instanceof Map)) {
        return false;
    }
    const isUpdateSnapshot = _updateSnapshot === "new" || _updateSnapshot === "none" || _updateSnapshot === "all";
    if (!isUpdateSnapshot) {
        return false;
    }
    if (typeof updated !== "number") {
        return false;
    }
    if (typeof added !== "number") {
        return false;
    }
    return true;
}
exports.isSnapshotState = isSnapshotState;
/**
 * Checks whether the given input is a `JestTestConfiguration` provided by jest.
 */
function isJestTestConfiguration(obj) {
    if (typeof obj !== "object") {
        return false;
    }
    if (obj === null) {
        return false;
    }
    const { snapshotState, testPath, currentTestName, isNot } = obj;
    if (typeof testPath !== "string") {
        return false;
    }
    if (typeof currentTestName !== "string") {
        return false;
    }
    if (typeof isNot !== "boolean") {
        return false;
    }
    if (!isSnapshotState(snapshotState)) {
        return false;
    }
    return true;
}
exports.isJestTestConfiguration = isJestTestConfiguration;
//# sourceMappingURL=jest.js.map