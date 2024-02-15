import React, { useMemo } from 'react';
import './ColorLegend.css';


export const ColorLegend: React.FC<IProps> = (props) => {


    const sumOfCounts = useMemo(() => {
        return props.colorLegendItems.reduce((sum, item) => sum + item.count, 0);
    }, [props.colorLegendItems]);


    const generateRandomKey = () => {
        const randomString = Math.random().toString(36).substring(7);
        const timestamp = new Date().getTime();
        return `${randomString}_${timestamp}`;
    };


    return (
        <div className="color-legend">
            {props.colorLegendItems.map((item, index) => {
                // Calculate the percentage of each count relative to the sum
                const percentage = (item.count / sumOfCounts) * 100;
                return (
                    <div key={generateRandomKey()} className="color-legend-item">
                        <div className="color-legend-bar" style={{ backgroundColor: `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${item.color.a})` }}>
                            <span className="color-legend-text">{item.text}</span>
                            <div className="color-legend-stats">
                                <span className="color-legend-count">{item.count}</span>
                                <span className="color-legend-percentage">{percentage.toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


interface IProps {
    colorLegendItems: {
        text: string;
        color: { r: number; g: number; b: number; a: number };
        count: number;
    }[]
}




