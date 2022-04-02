import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { ChildPage } from '@app/components';
import { Charts, Table } from './components';

const Portfolio: NextPage = () => {
  const meta = {
    title: 'Kevin Kieninger - Portfolio Example',
    description: 'A sample data visualization project with Visx and Chakra UI',
  };

  return (
    <ChildPage meta={meta}>
      <Heading fontSize="6xl" fontWeight="thin">
        this is where the portfolio will live.
      </Heading>
      <Charts />
      <Table />
    </ChildPage>
  )
}

export default Portfolio;
