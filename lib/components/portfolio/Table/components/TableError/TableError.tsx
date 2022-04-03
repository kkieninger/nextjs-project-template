import { Heading, Text, Flex } from '@chakra-ui/react';
import { ErrorIcon } from '@app/components';

const TableError = () => (
  <Flex
    align="center"
    justify="center"
    direction="column"
    my={8}
    p={6}
    bg="red.600"
    color="white"
    rounded="md"
  >
    <ErrorIcon boxSize="12" mb="3" />
    <Heading fontSize="5xl" mb="3">We're sorry.</Heading>
    <Text>
      We've encountered an error trying to fetch your portfolio items. Please try again later.
    </Text>
  </Flex>
);

export default TableError;
