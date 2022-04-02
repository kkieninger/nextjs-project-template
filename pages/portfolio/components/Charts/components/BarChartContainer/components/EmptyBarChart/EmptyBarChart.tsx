import React from 'react';

interface Props {
  yAxisLabel: string;
  width: number;
  height: number;
}

const EmptyBarChart = ({ yAxisLabel, width, height }: Props) => {
  const textStyles = {
    color: '#666',
    cursor: 'default',
    fill: '#666',
    fontSize: '11px',
  };

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 575 400"
      aria-label="Empty Portfolio Chart"
      aria-hidden="false"
      style={{ maxWidth: '100%' }}
    >
      <g data-group="chart-lines">
        <path stroke="#E6E6E6" strokeWidth="1" d="M 71 385.5 L 565 385.5"></path>
        <path stroke="#E6E6E6" strokeWidth="1" d="M 71 46.5 L 565 46.5"></path>
        <path stroke="#E6E6E6" strokeWidth="1" d="M 71 317.5 L 565 317.5"></path>
        <path stroke="#E6E6E6" strokeWidth="1" d="M 71 250.5 L 565 250.5"></path>
        <path stroke="#E6E6E6" strokeWidth="1" d="M 71 182.5 L 565 182.5"></path>
        <path stroke="#E6E6E6" strokeWidth="1" d="M 71 115.5 L 565 115.5"></path>
        <path stroke="#CCD6EB" strokeWidth="1" d="M 71 385.5 L 565 385.5"></path>
      </g>
      <g data-group="chart-label">
        <text
          x="25.125"
          textAnchor="middle"
          transform="rotate(270 25.125 216)"
          style={{
            ...textStyles,
            fontSize: '14px',
          }}
          y="216"
        >
          {yAxisLabel}
        </text>
      </g>
      <g data-group="chart-bars">
        <rect x="179.5" y="351" width="80" height="34" fill="#F5F5F5" role="img"></rect>
        <rect x="281.5" y="351" width="80" height="34" fill="#F5F5F5" role="img"></rect>
        <rect x="376.5" y="351" width="80" height="34" fill="#F5F5F5" role="img"></rect>
      </g>
      <g data-group="chart-lines">
        <text x="56" style={textStyles} textAnchor="end" y="390">
          ${`0`}
        </text>
        <text x="56" style={textStyles} textAnchor="end" y="322">
          ${`20`}
        </text>
        <text x="56" style={textStyles} textAnchor="end" y="254">
          ${`40`}
        </text>
        <text x="56" style={textStyles} textAnchor="end" y="187">
          ${`60`}
        </text>
        <text x="56" style={textStyles} textAnchor="end" y="119">
          ${`80`}
        </text>
        <text x="56" style={textStyles} textAnchor="end" y="52">
          ${`100`}
        </text>
      </g>
    </svg>
  );
};

export default EmptyBarChart;
