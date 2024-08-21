// This Donut chart is static
import React from 'react';

const DonutChart = () => {
  const size = 90; // Size of the chart
  const strokeWidth = 5; // Width of the donut's stroke

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - 0.6); // 60% filled

  return (
    <div className="w-6/12 mx-auto p-4 rounded-lg">
      <svg
        className="w-full h-full"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#00AD55" 
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-gray-800 font-bold text-xl"
        >
          60%
        </text>
      </svg>
    </div>
  );
};

export default DonutChart;
