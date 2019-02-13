/// <reference types="react" />
import * as React from "react";
import { FailedSnapshotInfo } from "../../../reporter-types";
export interface SnapshotProps {
    snapshot: FailedSnapshotInfo;
}
export declare class Snapshot extends React.Component<SnapshotProps> {
    private readonly snapshot;
    render(): JSX.Element;
}
