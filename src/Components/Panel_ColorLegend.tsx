import React, { useEffect, useState } from "react";
import GroupPicker from "./GroupPicker";
import ColorLegend from "./ColorLegend ";

const Panel_ColorLegend: React.FC<IProps> = (props) => {
    const { legendData, onChange } = props;

    useEffect(() => {
        console.log("dario: Panel_ColorLegend.useEffect legendData: ", legendData);
    }, [legendData]);

    return (
        <>
            {legendData && (
                <div>
                    <GroupPicker legendData={legendData} onChange={onChange} />
                    <ColorLegend colorList={legendData.filter(item => item.checked)[0].colorLegendItems} />
                </div >)
            }
        </>
    );
};

export default Panel_ColorLegend;
interface IProps {
    legendData: {
        name: string;
        checked: boolean;
        value: string;
        colorLegendItems: {
            text: string;
            color: {
                r: number;
                g: number;
                b: number;
                a: number;
            };
            count: number;
        }[];
    }[];
    onChange: (selectedKey: string) => void;
}
