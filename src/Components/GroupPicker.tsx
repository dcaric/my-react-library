import React from 'react';
import "./GroupPicker.css";

const GroupPick: React.FC<IProps> = ({ items, onChange }) => {
    return (
        <div>
            {items.map(item => (
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
        </div>
    );
};

export default GroupPick;

interface IProps {
    items: { name: string; checked: boolean; value: string}[];
    onChange: (selectedKey: string) => void;
}
