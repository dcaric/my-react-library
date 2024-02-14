import React, { useEffect, useState } from "react";
import { Panel_ColorLegend2 } from "./Panel_ColorLegend2";


const myData = {
    "legendData": [
        {
            "name": "Segment",
            "checked": true,
            "value": "Segment",
            "colorLegendItems": [
                { "text": "Item 10", "color": { "r": 255, "g": 0, "b": 0, "a": 1 }, "count": 10 },
                { "text": "Item 20", "color": { "r": 0, "g": 255, "b": 0, "a": 0.8 }, "count": 20 },
                { "text": "Item 30", "color": { "r": 0, "g": 0, "b": 255, "a": 0.6 }, "count": 30 }
            ]
        },
        {
            "name": "PSC/PCI",
            "checked": false,
            "value": "PSC/PCI",
            "colorLegendItems": [
                { "text": "Item 1", "color": { "r": 255, "g": 255, "b": 0, "a": 1 }, "count": 15 },
                { "text": "Item 2", "color": { "r": 255, "g": 0, "b": 255, "a": 0.8 }, "count": 25 },
                { "text": "Item 3", "color": { "r": 0, "g": 255, "b": 255, "a": 0.6 }, "count": 35 },
                { "text": "Item 4", "color": { "r": 128, "g": 0, "b": 128, "a": 0.4 }, "count": 45 },
                { "text": "Item 5", "color": { "r": 0, "g": 128, "b": 0, "a": 0.2 }, "count": 55 }
            ]
        }
    ],
}




export const Tab_Handover2: React.FC<IProps> = (props) => {
    const [_state_selectedLegend, _setState_selectedLegend] = useState(myData.legendData[0].name);
    const [_state_selectedColorLegendData, _setState_selectedColorLegendData] = useState(myData.legendData[0].colorLegendItems);
    const [_state_groupPickLegendData, _setState_groupPickLegendData] = useState(myData.legendData.map(({ name, value }) => ({ name, value })));

    useEffect(() => {
        const selectedColorLegendData = myData.legendData.find(legend => legend.name === _state_selectedLegend)?.colorLegendItems ?? [];
        _setState_selectedColorLegendData(selectedColorLegendData);


        const groupPickLegendData = myData.legendData.map(({ name, value }) => ({
            name,
            value: value || name,
        }));
        _setState_groupPickLegendData(groupPickLegendData);
    }, [_state_selectedLegend]);


    return (
        <>
            <Panel_ColorLegend2
                colorLegendData={_state_selectedColorLegendData}
                groupPickLegendData={_state_groupPickLegendData}
                selectedGroupKey={_state_selectedLegend}
                onChange={_setState_selectedLegend}
            />
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
    legendData: Array<{
        name: string;
        value: string;
        colorLegendItems: ColorLegendItem[];
    }>;
}




