import { Tabs, TabList, TabPanels, TabPanel, Tab, SimpleGrid, Box } from '@chakra-ui/react';
import { ChartData } from '@app/types/charts';
import PieChartContainer from './components/PieChartContainer';
import BarChartContainer from './components/BarChartContainer';
import { normalizeChartData } from './utils';

interface Props {
  data: ChartData[];
}

const Charts = ({ data }: Props) => (
  <Box>
    <Tabs>
      <TabList>
        <Tab>Basic</Tab>
        <Tab>Advanced</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
            <Box>
              <PieChartContainer
                title="Item Count"
                valueDescriptor="Items"
                data={normalizeChartData(data, 'volume')}
              />
            </Box>
            <Box>
              <PieChartContainer
                title="Market Value"
                data={normalizeChartData(data, 'value')}
                isCurrency={true}
              />
            </Box>
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
            <Box>
              <BarChartContainer
                title="Resell Price Premium"
                yAxisLabel="Price Premium (%)"
                data={normalizeChartData(data, 'pricePremium')}
              />
            </Box>
            <Box>
              <BarChartContainer
                title="Average Price"
                yAxisLabel="Average Price"
                data={normalizeChartData(data, 'averagePrice')}
              />
            </Box>
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default Charts;