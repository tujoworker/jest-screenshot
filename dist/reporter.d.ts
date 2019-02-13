/// <reference types="jest" />
import { JestScreenshotConfiguration } from "./config";
declare const _default: {
    new (): {
        config: JestScreenshotConfiguration;
        onRunComplete(contexts: Set<jest.Context>, { testResults, numFailedTests }: jest.AggregatedResult): void;
    };
};
export = _default;
