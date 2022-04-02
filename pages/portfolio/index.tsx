import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { ChildPage } from '@app/components';

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
    </ChildPage>
  )
}

export default Portfolio;
