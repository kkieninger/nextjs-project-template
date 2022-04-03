import { Box, Text, Flex, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box
    as="footer"
    borderTop="1px solid"
    borderColor="gray.300"
    fontSize="sm"
    textAlign="center"
    p="3"
  >
    <Text>
      {`Created by Kevin Kieninger | ${new Date().getFullYear()}`}
    </Text>
    <Flex
      justify="space-between"
      align="center"
      maxW="400px"
      my="4"
      mx="auto"
      color="orange.500"
    >
      <Link href="https://github.com/kkieninger/nextjs-project-template" isExternal>
        source
      </Link>
      <Link href="https://github.com/kkieninger" isExternal>
        github
      </Link>
      <Link href="https://www.linkedin.com/in/kkieninger" isExternal>
        linkedin
      </Link>
    </Flex>
  </Box>
);

export default Footer;
