// src/ColorPalette.js
import React from 'react';

const colors = [
  { color: '#D80000', width: '10%' },  // Red
  { color: '#F78F00', width: '50%' },  // Orange
  { color: '#F5C600', width: '32%' },  // Yellow
  { color: '#AAAAAA', width: '8%' },  // Gray
];

const ColorPalette = () => {
  return (
    <div className="w-full shadow-md flex overflow-hidden">
      {colors.map((colorItem, index) => (
        <div
          key={index}
          className={`h-5 ${index === 0 ? 'rounded-l-full' : ''} ${index === colors.length - 1 ? 'rounded-r-full' : ''}`}
          style={{
            backgroundColor: colorItem.color,
            width: colorItem.width,
          }}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
