export interface JestScreenshotConfiguration {
    /**
     * Passed to **native-image-diff**. Will disable or enable antialiasing detection.
     * Defaults to `true`.
     */
    detectAntialiasing?: boolean;
    /**
     * Passed to **native-image-diff**. Specifies the threshold on a scale from `0` to `1`
     * for when a pixel counts as changed. `0` allows no difference between two pixels and
     * `1` detects no difference between a white and a black pixel.
     */
    colorThreshold?: number;
    /**
     * If specified, makes the test check for the absolute number of pixels changed. When for example
     * set to `100`, An image which differs from it's snapshot by `101` pixels would fail.
     *
     * Is set to `undefined` by default and hence the check is disabled.
     */
    pixelThresholdAbsolute?: number;
    /**
     * If specified, makes the test check for the relative number of pixels changed. When for example
     * set to `0.5`, An image which differs from it's snapshot by 50.0001% of the pixels would fail.
     *
     * Is set to `0` if neither `pixelThresholdAbsolute` nor `pixelThresholdRelative` are confiured.
     */
    pixelThresholdRelative?: number;
    /**
     * An optional directory name to store the snapshots in. Defaults to `__snapshots__`.
     * Will be relative to the test file.
     */
    snapshotsDir?: string;
    /**
     * The directory to write the report to. Defaults to a directory `jest-screenshot-reports` in
     * the project's root directory. Can be set to `null` to explicitly disable generating reports.
     * Will be relative to the project's root directory.
     */
    reportDir?: string;
    /**
     * Disables generating of reports.
     */
    noReport?: boolean;
}
export declare function config(customConfig?: JestScreenshotConfiguration): JestScreenshotConfiguration;
