import type { NextPage } from 'next';
import { Heading, Divider } from '@chakra-ui/react';
import { ChildPage, Charts, Table, ProjectDescription } from '@app/components';

const Portfolio: NextPage = () => {
  const meta = {
    title: 'Kevin Kieninger - Portfolio Example',
    description: 'A sample data visualization project with Visx and Chakra UI',
  };

  return (
    <ChildPage meta={meta}>
      <Heading fontSize="6xl" fontWeight="thin" mb={6}>
        Portfolio Experience - Refactor
      </Heading>
      <ProjectDescription />
      <Divider my={10} />
      <Charts />
      <Table />
    </ChildPage>
  )
}

export default Portfolio;
