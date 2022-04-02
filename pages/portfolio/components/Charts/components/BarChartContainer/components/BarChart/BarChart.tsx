import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { AxisLeft } from '@visx/axis';
import { GridRows } from '@visx/grid';
import { scaleBand, scaleLinear } from '@visx/scale';
import { ProductData } from '../../../../types';

interface Props {
  data: ProductData[];
  width: number;
  height: number;
  yAxisLabel: string;
  handleMouseEnter: (data: ProductData) => void;
  handleMouseLeave: () => void;
  activeItem: string | null;
}

const BarChart = ({
  data,
  width,
  height,
  yAxisLabel,
  handleMouseEnter,
  handleMouseLeave,
  activeItem,
}: Props) => {
  const getDataValue = (datum: ProductData) => Number(datum.value);

  // bounds
  const verticalMargin = 50;
  const xMax = width;
  const yMax = height - verticalMargin;
  const yAxisSteps = 5;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(datum => datum.label),
        padding: 0.4,
      }),
    [xMax],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getDataValue))],
      }),
    [yMax],
  );

  return (
    <svg width={width} height={height} overflow="visible" style={{ maxWidth: '100%' }}>
      <rect width={width} height={height} fill="#FFF" rx={14} />
      <Group top={verticalMargin / 2}>
        <GridRows
          scale={yScale}
          width={xMax}
          height={yMax}
          stroke="black"
          strokeOpacity={0.08}
          strokeWidth="1px"
          pointerEvents="none"
          numTicks={yAxisSteps}
        />
        <AxisLeft scale={yScale} stroke="none" tickStroke="none" numTicks={yAxisSteps} />
        <text x="-70" y="15" transform="rotate(-90)" fontSize={10}>
          {yAxisLabel}
        </text>

        {data.map(datum => {
          const { label, labelColor } = datum;
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getDataValue(datum)) ?? 0);
          const barX = xScale(label);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${label}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={labelColor}
              onMouseEnter={() => handleMouseEnter(datum)}
              onMouseLeave={handleMouseLeave}
              opacity={!activeItem || activeItem === datum.label ? 1 : 0.3}
              style={{ transition: 'opacity 0.2s ease', cursor: 'pointer' }}
            />
          );
        })}
      </Group>
    </svg>
  );
};

export default BarChart;
