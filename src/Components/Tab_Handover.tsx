import React, { useEffect, useState } from "react";
import './ColorLegend.css';
import Panel_ColorLegend from "./Panel_ColorLegend";

const Tab_Handover: React.FC<IProps> = (props) => {
    const { legendData } = props;
    
    const [selectedLegend, setSelectedLegend] = useState(legendData[0].name);

    const handleSelectionChange = (selectedKey: string) => {
        setSelectedLegend(selectedKey);
    };

    useEffect(() => {
        console.log("dario: Tab_Handover.useEffect legendData: ", legendData);
        console.log("dario: Tab_Handover.useEffect selectedLegend: ", selectedLegend);
    }, [legendData, selectedLegend]);

    const selectedColorLegendData = legendData.find(legend => legend.name === selectedLegend)?.colorLegendItems ?? [];
    console.log("dario: Tab_Handover selectedColorLegendData", selectedColorLegendData);

    const groupPickLegendData = legendData.map(({ name, value }) => ({
        name,
        value: value || name,
    }));

    return (
        <Panel_ColorLegend
            colorLegendData={selectedColorLegendData}
            groupPickLegendData={groupPickLegendData}
            selectedGroupKey={selectedLegend}
            onChange={handleSelectionChange}
        />
    );
};


export default Tab_Handover;
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
