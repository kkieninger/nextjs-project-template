import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Box,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';

const ROWS_TO_RENDER = 10;

const LoadingTable = () => (
  <TableContainer>
    <Table>
      <Thead>
        <Tr>
          <Th>
            <Skeleton h="4" w="50px" />
          </Th>
          <Th>
            <Skeleton h="4" w="115px" />
          </Th>
          <Th isNumeric>
            <Skeleton h="4" w="115px" ml="auto" />
          </Th>
          <Th isNumeric>
            <Skeleton h="4" w="115px" ml="auto" />
          </Th>
          <Th isNumeric>
            <Skeleton h="4" w="115px" ml="auto" />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {[...Array(ROWS_TO_RENDER)].map((_, index) => (
          <Tr key={index}>
            <Td minW="400px">
              <Flex align="center" py={3}>
                <SkeletonCircle size="12" mx={4} />
                  <Box ml={6} flex="1 1 auto">
                    <Skeleton h="15px" w="125px" mb={2} />
                    <Skeleton h="20px" w="200px" mb={2} />
                    <Skeleton h="15px" w="75px" />
                  </Box>
              </Flex>
            </Td>
            <Td>
              <Skeleton h="15px" w="100px" />
            </Td>
            <Td>
              <Skeleton h="15px" w="75px" ml="auto" />
            </Td>
            <Td>
              <Skeleton h="15px" w="75px" ml="auto" />
            </Td>
            <Td>
              <Skeleton h="15px" w="75px" ml="auto" />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default LoadingTable;
