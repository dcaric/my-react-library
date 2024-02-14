import React from "react";
import { GroupPicker } from "./ColorLegend2/GroupPicker";
import { ColorLegend } from "./ColorLegend2/ColorLegend";

export const Panel_ColorLegend2: React.FC<IProps> = (props) => {

    return (
        <>
            <GroupPicker
                legendData={props.groupPickLegendData}
                selectedKey={props.selectedGroupKey}
                onChange={props.onChange}
            />
            <ColorLegend colorLegendItems={props.colorLegendData} />
        </>
    );
};


interface ColorLegendItem {
    text: string;
    color: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    count: number;
}


interface IProps {
    colorLegendData: ColorLegendItem[];
    onChange: (selectedKey: string) => void;
    groupPickLegendData: Array<{ name: string; value: string}>;
    selectedGroupKey: string;
}




