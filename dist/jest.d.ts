export interface SnapshotState {
    _counters: Map<string, number>;
    _updateSnapshot: "new" | "all" | "none";
    updated: number;
    added: number;
}
export interface JestTestConfiguration {
    snapshotState: SnapshotState;
    testPath: string;
    currentTestName: string;
    isNot: boolean;
}
export interface MatcherResult {
    message?(): string;
    pass: boolean;
    actual?: string;
    expected?: string;
}
/**
 * Checks whether the given input is a `SnapshotState` provided by jest.
 */
export declare function isSnapshotState(obj: any): obj is SnapshotState;
/**
 * Checks whether the given input is a `JestTestConfiguration` provided by jest.
 */
export declare function isJestTestConfiguration(obj: any): obj is JestTestConfiguration;
