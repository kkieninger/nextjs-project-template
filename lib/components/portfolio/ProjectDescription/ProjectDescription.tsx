import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Box,
  Text,
  Tag,
  Link,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';

const ProjectDescription = () => {
  const TECHNOLOGIES = [
    { name: 'ReactJS', docs: 'https://reactjs.org/' },
    { name: 'TypeScript', docs: 'https://www.typescriptlang.org/' },
    { name: 'React Query', docs: 'https://react-query.tanstack.com/' },
    { name: 'Visx', docs: 'https://airbnb.io/visx' },
    { name: 'Chakra UI', docs: 'https://chakra-ui.com/' },
  ];

  return (
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
          <Text mb={2}>
            This was a recent project I did at my current company that involved modernizing and refactoring a portfolio experience for our customers. The previous
            feature was outdated, poorly maintained, and leveraged technologies that we were striving to deprecate (in favor of more modern technologies).
          </Text>
          <Text>There were two large reasons for undertaking this effort:</Text>
          <OrderedList mt={2} mb={8}>
            <ListItem mb={2}>
              <Text as="strong">Performance Implications.</Text>
              <Box mt={1}>
                <Text mb={2}>
                  The previous experience was ripe for a refactor and had a lot of room for performance optimizations, with the most obvious being the use of Highcharts
                  for its data visualization. At the time, Highcharts was (by far) the largest NPM dependency in the application, accounting for roughly 9% of the entire
                  app bundle. At the same time, it was also among the most under-utilized pieces of the codebase, as it only existed in this single location. Undertaking
                  this work meant we were later able to completely remove Highcharts from the codebase, as other experiences within our monolith had begun leveraging Visx
                  for its data visualization.
                </Text>
                <Text mb={2}>
                  Additionally, the data fetching patterns within this experience were outdated. Previously, we were following a more traditional method of handling
                  asynchronous data within React - fetching the data on app / component mount, awaiting the response, and then storing the response in a combination of
                  component (React Hooks) and global state (Redux). As this involved updating the global state multiple times depending on the API data, it would
                  unnecessarily re-render the entire application, which led to a sluggish UI for our customers. In an effort to curb this, we transitioned our data
                  loading patterns to React Query, which allowed a more declarative, opinionated method for handling asynchronous data within this experience. As an added
                  bonus, this allowed us to remove this data from our Redux store, meaning it became easier to code split and no longer had to be shipped within our global
                  bundle.
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Text as="strong">Technology Standardization.</Text>
              <Box mt={1}>
                <Text mb={2}>
                  In addition to the performance implications outlined above, this project also allowed us to refactor and clean up a very old, outdated piece of the codebase.
                  While the previous feature was leveraging an outdated charting library, it was also architected with Bootstrap and Semantic UI for its layout, class-based
                  React components, and either suspect or non-existent type definitions.
                </Text>
                <Text mb={2}>
                  Deprecating Bootstrap / Semantic UI enabled us to integrate better with our web design system. Switching to Visx allowed us more fine-grained control over the
                  data visualization of our UIs, without all of the extra, unnecessary boilerplate that exists in other "kitchen sink" style charting libraries. And as I mentioned
                  above, migrating our data fetching pattern to React Query gave us a more declarative, opinionated, and performant means of handling asynchronous data.
                </Text>
              </Box>
            </ListItem>
          </OrderedList>
          <Heading fontSize="md" mb={2}>Technologies:</Heading>
          {TECHNOLOGIES.map(tech => (
            <Link isExternal href={tech.docs} key={tech.name} mr={1}>
              <Tag>{tech.name}</Tag>
            </Link>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ProjectDescription;
