/// <reference types="react" />
import * as React from "react";
export interface DiffSliderProps {
    received: string;
    snapshot: string;
    diff: string;
    width: number;
    height: number;
}
export declare class DiffSlider extends React.Component<DiffSliderProps> {
    private ui;
    private dragging;
    private sliderX;
    private diffOpacity;
    private container;
    private imageReceived;
    private imageSnapshot;
    private imageDiff;
    private initialize();
    private readonly aspectRatio;
    private handleDragStart(event);
    private handleDragStop();
    private handleDrag(event);
    private slide(event);
    private refContainer(element);
    private refImageReceived(element);
    private refImageSnapshot(element);
    private refImageDiff(element);
    private adjustSizes();
    private handleDiffOpacity(event);
    render(): JSX.Element;
}
