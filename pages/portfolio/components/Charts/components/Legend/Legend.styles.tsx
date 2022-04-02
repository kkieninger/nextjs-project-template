import { chakra } from '@chakra-ui/react';
import { LegendItem } from '@visx/legend';

export const ChakraLegendItem = chakra(LegendItem, {
  baseStyle: {
    fontSize: 'md',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});
