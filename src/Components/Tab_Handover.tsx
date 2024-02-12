import React, { useEffect, useState } from "react";
import './ColorLegend.css';
import Panel_ColorLegend from "./Panel_ColorLegend";

const Tab_Handover: React.FC<IProps> = (props) => {
    const { legendData } = props;
    const [_state_selectedLegend, _setState_selectedLegend] = useState(legendData[0].name);
    const handleSelectionChange = (selectedKey: string) => {
        _setState_selectedLegend(selectedKey);
    };

    useEffect(() => {
        console.log("dario: Tab_Handover.useEffect legendData: ", legendData);
        console.log("dario: Tab_Handover.useEffect selectedLegend: ", _state_selectedLegend);
    }, [legendData, _state_selectedLegend]);

    const selectedColorLegendData = legendData.find(legend => legend.name === _state_selectedLegend)?.colorLegendItems ?? [];
    console.log("dario: Tab_Handover selectedColorLegendData", selectedColorLegendData);

    // data for radio buttons
    const groupPickLegendData = legendData.map(({ name, value }) => ({
        name,
        value: value || name,
    }));

    return (
        <>
            <Panel_ColorLegend
                colorLegendData={selectedColorLegendData}
                groupPickLegendData={groupPickLegendData}
                selectedGroupKey={_state_selectedLegend}
                onChange={handleSelectionChange}
            />
        </>
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
