import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWidgetSelection } from '../store/widgetsSlice';
import DonutChart from '../utils/DonutChart';
import BarChart from '../utils/BarChart';
import ColorPalette from '../utils/ColorPalette';


function Widget({ widget, category }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(updateWidgetSelection({ category, widgetId: widget.id, selected: false }));
  };

  // Widget design for CSPM_Executive_Dashboard

  if (category === 'CSPM_Executive_Dashboard') {
    return (
      <div className='bg-white shadow rounded-lg p-4 w-[30%] min-h-60'>
        <div className='flex justify-between items-center mb-2'>
          <div className="text-lg font-semibold">{widget.name}</div>
          <div><button onClick={handleRemove} className="text-red-500">x</button></div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <DonutChart />
          <div className="text-gray-600 w-6/12">{widget.text}</div>
        </div>
      </div>
    );
  }

  // Widget design for CWPP_Dashboard
  if (category === 'CWPP_Dashboard') {
    return (
      <div className='bg-white shadow rounded-lg p-4 w-[30%] min-h-60'>
        <div className='flex justify-between items-center mb-20'>
          <div className="text-lg font-semibold">{widget.name}</div>
          <div><button onClick={handleRemove} className="text-red-500">x</button></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <BarChart />
         <p className="text-gray-600">{widget.text}</p>
        </div>
      </div>
    );
  }

  // Widget design for Registry_Scan
  if (category === 'Registry_Scan') {
    return (
      <div className='bg-white shadow rounded-lg p-4 w-[30%] min-h-60'>
        <div className='flex justify-between items-center mb-10'>
          <div className="text-lg font-semibold">{widget.name}</div>
          <div><button onClick={handleRemove} className="text-red-500">x</button></div>
        </div>
        <div className="flex flex-col">
         <p className="text-gray-600">{widget.text}</p>
         <ColorPalette />
        </div>
      </div>
    );
  }
  
  // default widget design
  return (
    <div className="flex flex-col bg-white shadow-md p-4 m-2 w-[30%]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{widget.name}</h3>
        <button onClick={handleRemove} className="text-red-500">x</button>
      </div>
      <p>{widget.text}</p>
    </div>
  );
}

export default Widget;
