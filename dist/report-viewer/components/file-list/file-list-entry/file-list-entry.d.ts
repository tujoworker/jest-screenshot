/// <reference types="react" />
import * as React from "react";
import { FileReport } from "../../../../reporter-types";
export interface FileListEntryProps {
    file: FileReport;
}
export declare class FileListEntry extends React.Component<FileListEntryProps> {
    private testFiles;
    private readonly file;
    private readonly active;
    handleClick(): void;
    render(): JSX.Element;
}
