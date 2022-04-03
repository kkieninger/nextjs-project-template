import { Stack, Box, Flex, SimpleGrid, Heading, Text } from '@chakra-ui/react'; 
import EmptyPieChart from '../PieChartContainer/components/EmptyPieChart';

/**
 * This is a simple error UI that renders if there is an error fetching data
 * for the charts. As with the loading skeleton, we want to try and prevent
 * layout shift when possible.
 */
const ChartError = () => (
  <Stack minH="530px" pos="relative">
    <Flex
      pos="absolute"
      top="0"
      right="0"
      left="0"
      bottom="0"
      align="center"
      justify="center"
      direction="column"
      color="red.700"
      bg="rgba(254, 178, 178, 0.7)"
    >
      <Heading fontSize="6xl" mb="4">Oops!</Heading>
      <Text maxW="600px" textAlign="center">
        There was an error loading your portfolio data. Please try your search again later. We apologize for the inconvenience.
      </Text>
    </Flex>
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
      <Box>
        <EmptyPieChart width={450} height={450} />
      </Box>
      <Box>
        <EmptyPieChart width={450} height={450} />
      </Box>
    </SimpleGrid>
  </Stack>
);

export default ChartError;
