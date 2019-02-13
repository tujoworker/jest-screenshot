/// <reference types="node" />
import { DiffImage } from "native-image-diff";
import { MatcherResult } from "./jest";
import { JestScreenshotConfiguration } from "./config";
export interface ImageMatcherResult extends MatcherResult {
    diffImage?: DiffImage;
    changedRelative?: number;
    totalPixels?: number;
    changedPixels?: number;
    testFileName?: string;
    snapshotNumber?: number;
}
export interface ToMatchImageSnapshotParameters {
    /**
     * Can be used to override the path to which the snapshot image
     * will be written.
     */
    path?: string;
}
/**
 * A matcher for jest with compares a PNG image to a stored snapshot. Behaves similar to `.toMatchSnapshot()`.
 *
 * @param received The buffer from the call to `expect(...)`.
 * @param configuration The configuration object provided when initializing this library
 *     with a call to `jestScreenshot`.
 * @param parameters Optional parameters provided to the call of `expect(...).toMatchImageSnapshot(...)`.
 *
 * @return A `MatcherResult` usable by jest.
 */
export declare function toMatchImageSnapshot(received: Buffer, configuration: JestScreenshotConfiguration, parameters?: ToMatchImageSnapshotParameters): MatcherResult;
