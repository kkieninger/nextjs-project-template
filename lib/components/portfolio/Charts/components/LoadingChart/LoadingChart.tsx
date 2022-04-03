import { Skeleton, Stack, Box, Flex, SimpleGrid } from '@chakra-ui/react'; 

/**
 * This is a simple skeleton that initially loads in while we are
 * fetching the data needed to hydrate the charts to prevent layout
 * shift and help with our CLS scores.
 */
const LoadingChart = () => (
  <Stack minH="530px">
    {/* Skeleton tab labels */}
    <Flex my={3}>
      <Skeleton h="30px" w="70px" mr={6} />
      <Skeleton h="30px" w="120px" />
    </Flex>
    {/* Skeleton charts */}
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
      <Box>
        {/* Heading */}
        <Skeleton h="35px" my={8} w="100%" maxW="200px" />
        {/* Pie Chart */}
        <Skeleton
          h="220px"
          w="220px"
          my={10}
          borderRadius="100%"
          mx="auto"
        />
        {/* Legend */}
        <SimpleGrid spacing={3} columns={[2, 3, 5, 2, 3]}>
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
        </SimpleGrid>
      </Box>
      <Box>
        {/* Heading */}
        <Skeleton h="35px" my={8} w="100%" maxW="200px" />
        {/* Pie Chart */}
        <Skeleton
          h="220px"
          w="220px"
          my={10}
          borderRadius="100%"
          mx="auto"
        />
        {/* Legend */}
        <SimpleGrid spacing={3} columns={[2, 3, 5, 2, 3]}>
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
          <Skeleton w="100%" maxW="90px" h="15px" />
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  </Stack>
);

export default LoadingChart;
