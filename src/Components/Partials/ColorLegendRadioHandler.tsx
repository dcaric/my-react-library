import React from 'react';

interface IColorLegend {
  name: string;
  checked: boolean;
  value: string;
}

interface IProps {
  colorLegendTypes: IColorLegend[];
  onChangeHandler: () => void;
  idPrefix: string;
}



const ColorLegendRadioHandler: React.FC<IProps> = ({ colorLegendTypes, onChangeHandler, idPrefix }) => {
  return (
    <div style={{ position: 'absolute', display: 'block', opacity: '1' }}>
      {colorLegendTypes.map((colorLegendType, index) => (
        <React.Fragment key={idPrefix + colorLegendType.name + index}>
          <input
            style={{ position: 'absolute', display: 'block', opacity: '0' }}
            id={idPrefix + colorLegendType.name}
            type="radio"
            name={idPrefix + "colorLegendRadio"}
            checked={colorLegendType.checked}
            onChange={onChangeHandler}
          />
          <label htmlFor={idPrefix + colorLegendType.name}>
            {colorLegendType.name}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ColorLegendRadioHandler;
