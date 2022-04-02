import { LinkBox, LinkOverlay, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
  title: string;
  description: string | JSX.Element;
  href: string;
}

const Card = ({ title, description, href }: Props) => (
  <LinkBox
    as="article"
    maxW="sm"
    p="4"
    border="1px solid"
    rounded="md"
    borderColor="gray.300"
    transition="all 0.2s ease"
    _hover={{
      borderColor: 'orange.600',
      transition: 'all 0.2s ease',
      color: 'orange.600',
    }}
  >
    <Heading as="h2" fontSize="lg" mb="2">
      <NextLink href={href} passHref>
        <LinkOverlay>{title}</LinkOverlay>
      </NextLink>
    </Heading>
    <Text fontSize="sm">
      {description}
    </Text>
  </LinkBox>
);

export default Card;
