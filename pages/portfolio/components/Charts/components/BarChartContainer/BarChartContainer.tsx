import React, { useState } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import { ParentSize } from '@visx/responsive';
import Legend from '../Legend';
import { ProductData } from '../../types';
import BarChart from './components/BarChart';
import EmptyBarChart from './components/EmptyBarChart';

interface Props {
  data: ProductData[];
  title: string;
  yAxisLabel: string;
}

const BarChartContainer = ({ data, title, yAxisLabel }: Props) => {
  // Internal state that helps keep track of active / visibile pie items
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [omittedItems, setOmittedItems] = useState<Set<string>>(new Set());
  const CHART_HEIGHT = 275;

  // Set active element to moused over element
  const handleMouseEnter = (datum: ProductData) => {
    setActiveItem(datum.label);
  };

  // Hide tooltip and remove current active item
  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  // show / hide portfolio items
  const handleLabelClick = (productName: string) => {
    if (omittedItems.has(productName)) {
      setOmittedItems(
        omittedItems => new Set([...omittedItems].filter(item => item !== productName)),
      );
    } else {
      setOmittedItems(omittedItems => new Set(omittedItems.add(productName)));
    }
  };

  return (
    <Center my={8} flexDirection="column" px={4}>
      <ParentSize>
        {({ width }) => (
          <>
            <Heading size="xl" textTransform="uppercase">
              {title}
            </Heading>
            {!data.length ? (
              <EmptyBarChart
                width={width}
                height={CHART_HEIGHT}
                yAxisLabel={yAxisLabel}
              />
            ) : (
              <>
                <BarChart
                  data={
                    omittedItems.size
                      ? data.filter(datum => !omittedItems.has(datum.label))
                      : data
                  }
                  width={width}
                  height={CHART_HEIGHT}
                  yAxisLabel={yAxisLabel}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  activeItem={activeItem}
                />
                <Legend
                  data={data}
                  omittedItems={omittedItems}
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

export default BarChartContainer;
