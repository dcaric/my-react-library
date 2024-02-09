import React, { useEffect, useState } from "react";
import "./GroupPicker.css";

const GroupPick: React.FC<IProps> = (props) => {
    const { legendData, onChange } = props;
    console.log("dario: GroupPick legendData: ", legendData);


    useEffect(() => {
        console.log("dario: (0) GroupPick.useEffect legendData: ", legendData);
    }, []);

    useEffect(() => {
        console.log("dario: GroupPick.useEffect legendData: ", legendData);
    }, [legendData]);

    return (
        <>
            {legendData.map(item => (
                <div key={item.name} className="custom-radio-container">
                    <input
                        type="radio"
                        id={item.name}
                        name="groupPick"
                        checked={item.checked}
                        value={item.value}
                        className="custom-radio-input"
                        onChange={() => onChange(item.name)}
                    />
                    <label htmlFor={item.name} className="custom-radio-label">{item.value}</label>
                </div>

            ))}
        </>
    );
};

export default GroupPick;

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
