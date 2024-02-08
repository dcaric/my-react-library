import React, { useEffect, useState } from "react";
import GroupPicker from "./GroupPicker";
import ColorLegend from './ColorLegend ';

const initialData  = [
    {
      name: "Segment",
      checked: true,
      value: "sector",
      colorLegendItems: [
        { text: "Item 1", color: { r: 255, g: 0, b: 0, a: 1 }, count: 10 },
        { text: "Item 2", color: { r: 0, g: 255, b: 0, a: 0.8 }, count: 20 },
        { text: "Item 3", color: { r: 0, g: 0, b: 255, a: 0.6 }, count: 30 },
      ],
    },
    {
      name: "PSC/PCI",
      checked: false,
      value: "pci",
      colorLegendItems: [
        { text: "Item 1", color: { r: 255, g: 255, b: 0, a: 1 }, count: 15 },
        { text: "Item 2", color: { r: 255, g: 0, b: 255, a: 0.8 }, count: 25 },
        { text: "Item 3", color: { r: 0, g: 255, b: 255, a: 0.6 }, count: 35 },
        { text: "Item 4", color: { r: 128, g: 0, b: 128, a: 0.4 }, count: 45 },
        { text: "Item 5", color: { r: 0, g: 128, b: 0, a: 0.2 }, count: 55 },
      ],
    },
  ];

export const Panel_ColorLegend: React.FC<IProps> = (props) => {
    const {} = props;
    const [_state_dataColorLegend, _setState_setDataColorLegend] = useState(initialData);

    const onChange = (selectedKey: string) => {
        // Update the state to reflect the new selection
        const newData = _state_dataColorLegend.map(item => ({
            ...item,
            checked: item.name === selectedKey,
        }));

        _setState_setDataColorLegend(newData);
        console.log("dario: Panel_ColorLegend.onChange", selectedKey);
    };

    return (
        <>
            <GroupPicker items={_state_dataColorLegend} onChange={onChange}/>
            <ColorLegend items={_state_dataColorLegend.filter(item => item.checked)[0].colorLegendItems}/>
        </>
    );
};


interface IProps {

}
