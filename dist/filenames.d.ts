import { SnapshotState } from "./jest";
/**
 * Calculates the filename for an individual image snapshot file.
 * Depending on the configuration the provided `identifier` generator will be used
 * or a default identifier will be generated.
 *
 * @param testPath The `testPath` from the jest test configuration, leading to the test file.
 * @param currentTestName The `currentTestName` from the jest test configuration,
 *     the name of the current `it`/`describe` test.
 * @param snapshotState The `snapshotState` from the jest test configuration.
 *
 * @return A string used as a filename for the current snapshot.
 */
export declare function getSnapshotFileName(testPath: string, currentTestName: string, snapshotState: SnapshotState): string;
/**
 * Calculates the absolute path to an individual image snapshot file.
 *
 * @param testPath The `testPath` from the jest test configuration, leading to the test file.
 * @param currentTestName The `currentTestName` from the jest test configuration,
 *     the name of the current `it`/`describe` test.
 * @param snapshotState The `snapshotState` from the jest test configuration.
 *
 * @return A string with the absolute path to the current snapshot.
 */
export declare function getSnapshotPath(testPath: string, currentTestName: string, snapshotState: SnapshotState, snapshotsDir?: string): string;
export declare function getReportDir(reportDir?: string): string;
export declare function getReportPath(testPath: string, currentTestName: string, snapshotState: SnapshotState, reportDir?: string): string;
