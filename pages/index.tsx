import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import { Card, Footer } from '@app/components';

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg">
      <Head>
        <title>Kevin Kieninger - Projects</title>
        <meta name="description" content="A collection of projects and code samples by Kevin Kieninger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" minH="90vh" pt="20" pb="10">
        <Heading as="h1" fontSize="6xl" fontWeight="thin" mb="8">
          welcome.
        </Heading>
        <Text mb="6">
          Below are a series of example projects and code samples bootstrapped into a single application.
        </Text>
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          spacing={5}
          my={8}
        >
          <Card
            title="Portfolio refactor"
            href="/portfolio"
            description="A major refactor of a portfolio experience from Highcharts and Semantic UI into more modern technologies leveraging Visx, TypeScript and Chakra UI."
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </Container>
  )
}

export default Home;
