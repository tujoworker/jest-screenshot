/// <reference types="react" />
import * as React from "react";
import { FailedTest } from "../../../reporter-types";
export interface FailedTestSectionProps {
    failedTest: FailedTest;
}
export declare class FailedTestSection extends React.Component<FailedTestSectionProps> {
    private readonly failedTest;
    render(): JSX.Element;
}
