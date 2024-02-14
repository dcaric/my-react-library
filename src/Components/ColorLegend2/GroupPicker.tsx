import React, { useEffect } from "react";
import "./GroupPicker.css";


export const GroupPicker: React.FC<IProps> = (props) => {


    useEffect(() => {
        console.log("dario: GroupPicker useEffect props:", props);
    }, [props]);


    return (
        <>
            {props.legendData.map(item => (
                <div key={item.name} className="custom-radio-container">
                    <input
                        type="radio"
                        id={item.name}
                        name="groupPick"
                        checked={props.selectedKey === item.name}
                        value={item.value}
                        className="custom-radio-input"
                        onChange={() => {
                            console.log("dario: GroupPicker onChange item.name:", item.name);
                            props.onChange(item.name);
                        }}
                    />
                    <label htmlFor={item.name} className="custom-radio-label">{item.value}</label>
                </div>
            ))}
        </>
    );
};


interface IProps {
    legendData: Array<{
        name: string;
        value: string;
    }>;
    selectedKey: string;
    onChange: (selectedKey: string) => void;
}




