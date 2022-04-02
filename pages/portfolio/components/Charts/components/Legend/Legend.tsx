import React from 'react';
import { LegendOrdinal, LegendLabel } from '@visx/legend';
import { ChakraLegendItem } from './Legend.styles';
import { Grid } from '@chakra-ui/react';
import { ProductData } from '../../types';
import { scaleOrdinal } from '@visx/scale';

interface Props {
  data: ProductData[];
  omittedItems: Set<string>;
  setActiveItem: (arg: string | null) => void;
  handleLabelClick: (arg: string) => void;
}

const Legend = ({ data, omittedItems, setActiveItem, handleLabelClick }: Props) => {
  const scale = scaleOrdinal({
    domain: data.map(datum => datum.label),
    range: data.map(datum => datum.labelColor),
  });

  return (
    <LegendOrdinal scale={scale}>
      {labels => (
        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(5, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]}
          columnGap={4}
        >
          {labels.map(label => (
            <ChakraLegendItem
              key={`legend-quantile-${label.index}`}
              onMouseEnter={() => setActiveItem(label.datum)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => handleLabelClick(label.datum)}
              opacity={omittedItems.has(label.datum) ? 0.3 : 1}
            >
              <svg width={12} height={12}>
                <circle fill={label.value} r={6} cx={6} cy={6} />
              </svg>
              <LegendLabel align="left" margin="0 0 0 4px">
                {label.text}
              </LegendLabel>
            </ChakraLegendItem>
          ))}
        </Grid>
      )}
    </LegendOrdinal>
  );
};

export default Legend;
