import React, { useEffect } from "react";
import GroupPicker from "./GroupPicker";
import ColorLegend from "./ColorLegend";


const Panel_ColorLegend: React.FC<IProps> = (props) => {
    const { colorLegendData, onChange, groupPickLegendData, selectedGroupKey } = props;

    useEffect(() => {
        console.log("dario: Panel_ColorLegend.useEffect colorLegendData: ", colorLegendData);
    }, [colorLegendData]);

    return (
        <div>
            <GroupPicker
                legendData={groupPickLegendData}
                selectedKey={selectedGroupKey}
                onChange={onChange}
            />
            <ColorLegend colorLegendItems={colorLegendData} />
        </div>
    );
};

export default Panel_ColorLegend;


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
    groupPickLegendData: Array<{ name: string; value: string }>;
    selectedGroupKey: string;
}
