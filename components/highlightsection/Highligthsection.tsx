import {
  Box,
  Text,
  Heading,
  Container,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { IoIosSpeedometer } from 'react-icons/io';
import { RiBankCardFill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaHandPeace } from 'react-icons/fa';

export default function Highligthsection() {
  return (
    <Box as="section">
      <Box my="16" textAlign={'center'}>
        <Text color={'blue.500'} fontWeight={'bold'} pb="5" fontSize={'18'}>
          Highlights
        </Text>
        <Heading fontWeight={'semibold'} pb="5">
          Why Chakra UI Pro?
        </Heading>
        <Container maxW={'800'}>
          <Text fontSize={'2xl'}>
            Because these beautiful and responsive React components will help
            you realize your next idea in no time.
          </Text>
        </Container>
      </Box>
      <Container maxW={1100}>
        {/* Card Section Start */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="5">
          <Card align="center" variant={'outline'}>
            <Box color={'blue.500'} mt="5">
              <IoIosSpeedometer size={'80'}></IoIosSpeedometer>
            </Box>
            <CardHeader>
              <Heading fontSize={'2xl'}>Better workflow</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize={'18'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button size={'lg'} colorScheme="blue">
                View here
              </Button>
            </CardFooter>
          </Card>
          <Card align="center" variant={'outline'}>
            <Box color={'blue.500'} mt="5">
              <RiBankCardFill size={'80'}></RiBankCardFill>
            </Box>
            <CardHeader>
              <Heading fontSize={'2xl'}> Save good money</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize={'18'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button size={'lg'} colorScheme="blue">
                View here
              </Button>
            </CardFooter>
          </Card>
          <Card align="center" variant={'outline'}>
            <Box color={'blue.500'} mt="5">
              <IoSettingsSharp size={'80'}></IoSettingsSharp>
            </Box>
            <CardHeader>
              <Heading fontSize={'2xl'}>Easily customizable</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize={'18'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button size={'lg'} colorScheme="blue">
                View here
              </Button>
            </CardFooter>
          </Card>
          <Card align="center" variant={'outline'}>
            <Box color={'blue.500'} mt="5">
              <FaHandPeace size={'80'}></FaHandPeace>
            </Box>
            <CardHeader>
              <Heading fontSize={'2xl'}>Support Chakra UI</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize={'18'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button size={'lg'} colorScheme="blue">
                View here
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        {/* Card Section End*/}
      </Container>
    </Box>
  );
}
