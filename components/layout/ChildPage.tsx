import type { ReactElement } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Container, Box, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '../icons';

interface PageMeta {
  title: string;
  description: string;
}

interface ChildPageProps {
  meta?: PageMeta;
  children: ReactElement | ReactElement[];
}

const ChildPage = ({ meta, children }: ChildPageProps) => {
  return (
    <Container my={8} maxW="container.xl">
      <Head>
        <title>
          {meta?.title ?? 'Kevin Kieninger - projects'}
        </title>
        <meta
          name="description"
          content={meta?.description ?? 'A sample project / code sample by Kevin Kieninger'}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="header" mb="4">
        <NextLink href="/">
          <Button
            as="a"
            variant="outline"
            colorScheme="orange"
            cursor="pointer"
            size="sm"
            leftIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </NextLink>
      </Box>
      <Box as="main">
        {children}
      </Box>
    </Container>
  )
}

export default ChildPage;
