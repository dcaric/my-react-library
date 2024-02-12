import React, { useEffect } from "react";
import "./GroupPicker.css";

const GroupPick: React.FC<IProps> = (props) => {
    const { legendData, selectedKey, onChange } = props;

    return (
        <>
            {legendData.map(item => (
                <div key={item.name} className="custom-radio-container">
                    <input
                        type="radio"
                        id={item.name}
                        name="groupPick"
                        checked={selectedKey === item.name}
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
    legendData: Array<{
        name: string; 
        value: string; 
    }>;
    selectedKey: string;
    onChange: (selectedKey: string) => void;
}
