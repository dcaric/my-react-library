import React, { useEffect, useState } from "react";
import { Panel_ColorLegend2 } from "./Panel_ColorLegend2";


const myData = {
    "pickerName": "picker3",
    "legendData": [
        {
            "name": "Segment3",
            "checked": true,
            "value": "Segment3",
            "pickerName": "Segment3",
            "colorLegendItems": [
                { "text": "Item 110", "color": { "r": 255, "g": 0, "b": 0, "a": 1 }, "count": 10 },
                { "text": "Item 210", "color": { "r": 0, "g": 255, "b": 0, "a": 0.8 }, "count": 20 },
                { "text": "Item 310", "color": { "r": 0, "g": 0, "b": 255, "a": 0.6 }, "count": 30 }
            ]
        },
        {
            "name": "PSC/PCI3",
            "checked": false,
            "value": "PSC/PCI3",
            "colorLegendItems": [
                { "text": "Item 311", "color": { "r": 255, "g": 255, "b": 0, "a": 1 }, "count": 15 },
                { "text": "Item 321", "color": { "r": 255, "g": 0, "b": 255, "a": 0.8 }, "count": 25 },
                { "text": "Item 331", "color": { "r": 0, "g": 255, "b": 255, "a": 0.6 }, "count": 35 },
                { "text": "Item 341", "color": { "r": 128, "g": 0, "b": 128, "a": 0.4 }, "count": 45 },
                { "text": "Item 351", "color": { "r": 0, "g": 128, "b": 0, "a": 0.2 }, "count": 55 }
            ]
        }
    ],
}




export const Tab_Handover3: React.FC<IProps> = (props) => {
    const [_state_selectedLegend, _setState_selectedLegend] = useState(myData.legendData[1].name);
    const [_state_selectedColorLegendData, _setState_selectedColorLegendData] = useState(myData.legendData[0].colorLegendItems);
    const [_state_groupPickLegendData, _setState_groupPickLegendData] = useState(myData.legendData.map(({ name, value }) => ({ name, value })));
    const [_state_pickerName, _setState_pickerName] = useState(myData.pickerName);

    useEffect(() => {
        const selectedColorLegendData = myData.legendData.find(legend => legend.name === _state_selectedLegend)?.colorLegendItems ?? [];
        _setState_selectedColorLegendData(selectedColorLegendData);


        const groupPickLegendData = myData.legendData.map(({ name, value }) => ({
            name,
            value: value || name,
        }));
        _setState_groupPickLegendData(groupPickLegendData);

        _setState_pickerName(myData.pickerName);
    }, [_state_selectedLegend]);


    return (
        <span>
            <Panel_ColorLegend2
                colorLegendData={_state_selectedColorLegendData}
                groupPickLegendData={_state_groupPickLegendData}
                selectedGroupKey={_state_selectedLegend}
                onChange={_setState_selectedLegend}
                pickerName={_state_pickerName}
            />
        </span>
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
    pickerName: string;
    legendData: Array<{
        name: string;
        value: string;
        colorLegendItems: ColorLegendItem[];
    }>;
}




