import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import type { ProductData } from '../../../../types';

interface Props {
  containerRef: (element: HTMLElement | SVGElement | null) => void;
  width: number;
  height: number;
  data: ProductData[];
  activeItem: string | null;
  handleMouseEnter: (e: React.MouseEvent<SVGPathElement, MouseEvent>, data: ProductData) => void;
  handleMouseLeave: () => void;
}

const PieChart = ({
  containerRef,
  width,
  height,
  data,
  activeItem,
  handleMouseEnter,
  handleMouseLeave,
}: Props) => {
  // Visual chart options
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const top = centerY + margin.top;
  const left = centerX + margin.left;
  const frequency = (datum: ProductData) => datum.value;

  return (
    <svg ref={containerRef} width={width} height={height} style={{ maxWidth: '100%' }}>
      <Group top={top} left={left}>
        <Pie data={data} pieValue={frequency} pieSortValues={() => 1} outerRadius={radius}>
          {pie =>
            pie.arcs.map((arc, index) => {
              const { label, labelColor } = arc.data;
              const arcPath = pie.path(arc);

              return (
                <g key={`arc-${label}-${index}`}>
                  {arcPath && (
                    <path
                      d={arcPath}
                      fill={labelColor}
                      onMouseEnter={e => handleMouseEnter(e, arc.data)}
                      onMouseLeave={handleMouseLeave}
                      stroke="white"
                      strokeWidth="1px"
                      opacity={!activeItem || activeItem === arc.data.label ? 1 : 0.3}
                      style={{ transition: 'opacity 0.2s ease', cursor: 'pointer' }}
                    />
                  )}
                </g>
              );
            })
          }
        </Pie>
      </Group>
    </svg>
  );
};

export default PieChart;
