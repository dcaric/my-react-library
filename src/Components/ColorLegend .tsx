import React from 'react';
import './ColorLegend.css';

const ColorLegend: React.FC<IProps> = ({ items }) => {
  return (
    <div className="color-legend">
      {items.map((item, index) => (
        <div key={index} className="color-legend-item" style={{ width: '40rem' }}>
          <div className="color-legend-bar" style={{ backgroundColor: `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${item.color.a})` }}>
            <span className="color-legend-text">{item.text}</span>
            <span className="color-legend-count">{item.count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorLegend;

interface IProps {
  items: {
    text: string;
    color: { r: number; g: number; b: number; a: number };
    count: number;
  }[];
}
