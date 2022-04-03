import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import { formatDollars } from '@app/utils';
import { usePortfolioData } from './hooks';
import { calculateGainLoss } from './utils';
import { LoadingTable, TableError } from './components';

const Table = () => {
  const { data, error, isFetching } = usePortfolioData();

  if (isFetching) {
    return <LoadingTable />
  }

  if (error) {
    return <TableError />
  }

  return (
    <TableContainer>
      <ChakraTable>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Purchase Date</Th>
            <Th isNumeric>Purchase Price</Th>
            <Th isNumeric>Market Value</Th>
            <Th isNumeric>Gain / Loss</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data && (
            data.map(datum => (
              <Tr key={datum.id}>
                <Td>
                  <Flex align="center">
                    <Image src="/placeholder-image.webp" width={100} height={100} />
                    <Box ml={3}>
                      <Text fontWeight="semibold">{datum.productName}</Text>
                      <Text fontSize="sm" mb="2">{datum.productVariant}</Text>
                      {datum.size && <Tag>{`Size: ${datum.size}`}</Tag>}
                    </Box>
                  </Flex>
                </Td>
                <Td>{datum.purchaseDate}</Td>
                <Td isNumeric>{formatDollars(datum.purchasePrice)}</Td>
                <Td isNumeric>{formatDollars(datum.marketValue)}</Td>
                <Td isNumeric>
                  <Text
                    color={datum.marketValue > datum.purchasePrice ? 'green.500' : 'red.500'}
                    fontWeight="bold"
                  >
                    {`${calculateGainLoss(datum.marketValue, datum.purchasePrice)}%`}
                  </Text>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}

export default Table;
