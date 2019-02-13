import { FileReport } from "../../reporter-types";
export declare class StoreTestFiles {
    activeFileName: string;
    selectFile(file: FileReport): void;
    readonly activeFile: FileReport;
    isActive(file: FileReport): boolean;
}
