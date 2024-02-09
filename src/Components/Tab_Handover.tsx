import React, { useEffect, useState } from "react";
import './ColorLegend.css';
import Panel_ColorLegend from "./Panel_ColorLegend";


/*const initialData = [
    {
        name: "Segment",
        checked: true,
        value: "Segment",
        colorLegendItems: [
            { text: "Item 1", color: { r: 255, g: 0, b: 0, a: 1 }, count: 10 },
            { text: "Item 2", color: { r: 0, g: 255, b: 0, a: 0.8 }, count: 20 },
            { text: "Item 3", color: { r: 0, g: 0, b: 255, a: 0.6 }, count: 30 },
        ],
    },
    {
        name: "PSC/PCI",
        checked: false,
        value: "PSC/PCI",
        colorLegendItems: [
            { text: "Item 1", color: { r: 255, g: 255, b: 0, a: 1 }, count: 15 },
            { text: "Item 2", color: { r: 255, g: 0, b: 255, a: 0.8 }, count: 25 },
            { text: "Item 3", color: { r: 0, g: 255, b: 255, a: 0.6 }, count: 35 },
            { text: "Item 4", color: { r: 128, g: 0, b: 128, a: 0.4 }, count: 45 },
            { text: "Item 5", color: { r: 0, g: 128, b: 0, a: 0.2 }, count: 55 },
        ],
    },
];*/



const Tab_Handover: React.FC<IProps> = (props) => {
    const { legendData } = props;
    const [_state_dataColorLegend, _setState_setDataColorLegend] = useState(legendData);

    useEffect(() => {
        console.log("dario: Tab_Handover.useEffect legendData: ", legendData);
        _setState_setDataColorLegend(legendData);
    }, [legendData]);

    const onChange = (selectedKey: string) => {
        console.log("dario: Tab_Handover.onChange legendData: ", legendData);
    
        console.log("dario: Tab_Handover.onChange _state_dataColorLegend", _state_dataColorLegend);
        // Directly update the state with the new array
        const newData = _state_dataColorLegend.map(item => ({
            ...item,
            checked: item.name === selectedKey,
        }));
        _setState_setDataColorLegend(newData); // Directly set the new array
    };

    return (
        <>
            {legendData && (
                <Panel_ColorLegend legendData={_state_dataColorLegend} onChange={onChange} />
            )}
        </>
    );
};

export default Tab_Handover;

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
}
