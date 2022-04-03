import { useState, useMemo } from 'react';
import { useTooltip, useTooltipInPortal } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { ParentSize } from '@visx/responsive';
import { Center, Heading, Text } from '@chakra-ui/react';
import type { ProductData } from '../../types';

// Components
import Legend from '../Legend';
import PieChart from './components/PieChart';
import EmptyPieChart from './components/EmptyPieChart';

// Utils
import { formatDollars } from '@app/utils';

interface Props {
  data: ProductData[];
  title: string;
  // tooltip formatting
  valueDescriptor?: string;
  isCurrency?: boolean;
}

const PieChartContainer = ({
  data,
  title,
  valueDescriptor = '',
  isCurrency = false,
}: Props) => {
  // Internal state that helps keep track of active / visibile pie items
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [fooOmittedItems, setOmittedItems] = useState<Set<string>>(new Set());
  const [totalPieValue, setTotalPieValue] = useState(0);
  const CHART_HEIGHT = 275;

  useMemo(() => {
    const dataToTotal = fooOmittedItems.size
      ? data.filter((datum) => !fooOmittedItems.has(datum.label))
      : data;

    const total = dataToTotal.reduce((acc, curr) => acc + curr.value, 0);

    setTotalPieValue(total);
  }, [data, fooOmittedItems]);

  // Tooltip config
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<ProductData>();

  /**
   * Portals are used to help with any potential z-indexing issues to ensure
   * our tooltip does not become obscured by any rogue DOM elements:
   * https://airbnb.io/visx/docs/tooltip
   */
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  });

  // show tooltip and set active element to moused over element
  const handleMouseEnter = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    datum: ProductData,
  ) => {
    const coords = localPoint(event);
    showTooltip({
      tooltipLeft: coords?.x,
      tooltipTop: coords?.y,
      tooltipData: datum,
    });

    setActiveItem(datum.label);
  };

  // hide tooltip and remove current active item
  const handleMouseLeave = () => {
    setActiveItem(null);
    hideTooltip();
  };

  // show / hide portfolio items
  const handleLabelClick = (productName: string) => {
    if (fooOmittedItems.has(productName)) {
      setOmittedItems(
        (fooOmittedItems) => new Set([...fooOmittedItems].filter((item) => item !== productName)),
      );
    } else {
      setOmittedItems((fooOmittedItems) => new Set(fooOmittedItems.add(productName)));
    }
  };

  return (
    <Center my={8} flexDirection="column">
      <ParentSize>
        {({ width }) => (
          <>
            <Heading size="xl" textTransform="uppercase">
              {title}
            </Heading>
            {!data.length ? (
              <EmptyPieChart width={width} height={CHART_HEIGHT} />
            ) : (
              <>
                <PieChart
                  containerRef={containerRef}
                  data={
                    fooOmittedItems.size
                      ? data.filter((datum) => !fooOmittedItems.has(datum.label))
                      : data
                  }
                  activeItem={activeItem}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  width={width}
                  height={CHART_HEIGHT}
                />

                {tooltipOpen && tooltipData && (
                  <TooltipInPortal
                    key={tooltipData.label}
                    top={tooltipTop}
                    left={tooltipLeft}
                  >
                    <Text as="strong" size="md">
                      {tooltipData.label}
                    </Text>
                    <Text size="md">
                      {isCurrency
                        ? formatDollars(tooltipData.value)
                        : `${tooltipData.value} ${valueDescriptor}`}
                    </Text>
                    <Text size="md">{`${Math.round(
                      (100 * tooltipData.value) / totalPieValue,
                    )}%`}</Text>
                  </TooltipInPortal>
                )}

                <Legend
                  data={data}
                  omittedItems={fooOmittedItems}
                  setActiveItem={setActiveItem}
                  handleLabelClick={handleLabelClick}
                />
              </>
            )}
          </>
        )}
      </ParentSize>
    </Center>
  );
};

export default PieChartContainer;
