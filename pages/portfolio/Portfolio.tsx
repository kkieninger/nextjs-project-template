import type { NextPage } from 'next';
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Box,
  Divider,
} from '@chakra-ui/react';
import { ChildPage } from '@app/components';
import { Charts, Table } from './components';

const Portfolio: NextPage = () => {
  const meta = {
    title: 'Kevin Kieninger - Portfolio Example',
    description: 'A sample data visualization project with Visx and Chakra UI',
  };

  return (
    <ChildPage meta={meta}>
      <Heading fontSize="6xl" fontWeight="thin" mb="6">
        Portfolio Experience - Refactor
      </Heading>
      <Accordion allowMultiple>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box flex="1" textAlign="left" py={2} fontWeight="semibold">
                Project Details
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            TODO - add context here.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Divider my="10" />
      <Charts />
      <Table />
    </ChildPage>
  )
}

export default Portfolio;
