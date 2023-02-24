import { Box, Heading, Text, Container, Flex, Button } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export default function FAQ() {
  return (
    <Box as="section" my={20}>
      <Container maxW={1100}>
        <Flex>
          {/* Left Section */}
          <Box flex={2}>
            <Box textAlign={'left'} mr={20}>
              <Text
                color={'blue.500'}
                fontWeight={'bold'}
                pb="5"
                fontSize={'18'}
              >
                Support
              </Text>
              <Heading fontWeight={'semibold'} pb="5">
                FAQs
              </Heading>
              <Text fontSize={'2xl'}>
                Everything you need to know about the product and billing. For
                questions about licensing, please see our licensing page.
              </Text>
            </Box>
          </Box>
          {/* Left Section End */}

          {/* Rigth Section */}
          <Box flex={3}>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontSize={'xl'}>
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontSize={'xl'}>
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontSize={'xl'}>
                      Section 3 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Button display={'block'} m={'auto'} mt="5" fontWeight={'medium'}>
              Show more
            </Button>
          </Box>
          {/* Rigt Section End*/}
        </Flex>
      </Container>
    </Box>
  );
}
