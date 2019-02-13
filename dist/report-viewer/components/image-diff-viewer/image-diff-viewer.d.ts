/// <reference types="react" />
import * as React from "react";
export interface ImageDiffViewerProps {
    received: string;
    snapshot: string;
    diff: string;
    width: number;
    height: number;
}
export declare class ImageDiffViewer extends React.Component<ImageDiffViewerProps> {
    private tab;
    private readonly sliderTabActive;
    private readonly sideBySideTabActive;
    private readonly blendTabActive;
    private handleSliderTabClick();
    private handleBlendTabClick();
    private handleSideBySideTabClick();
    private renderDiff();
    render(): JSX.Element;
}
