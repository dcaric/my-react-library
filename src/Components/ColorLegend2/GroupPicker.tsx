import React, { useEffect } from "react";
import "./GroupPicker.css";


export const GroupPicker: React.FC<IProps> = (props) => {


    useEffect(() => {
        console.log("dario: GroupPicker useEffect props:", props);
    }, [props]);

    const generateRandomKey = () => {
        const randomString = Math.random().toString(36).substring(7);
        const timestamp = new Date().getTime();
        return `${randomString}_${timestamp}`;
    };

    return (
        <>
            {props.legendData.map(item => (
                <div key={generateRandomKey()} className="custom-radio-container">
                    <input
                        type="radio"
                        id={item.name}
                        name={props.pickerName}
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
    pickerName: string;
    legendData: Array<{
        name: string;
        value: string;
    }>;
    selectedKey: string;
    onChange: (selectedKey: string) => void;
}




