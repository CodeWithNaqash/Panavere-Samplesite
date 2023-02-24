import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';

export default function Newsletter() {
  return (
    <Box>
      <Container bg={'gray.50'} maxW="100%" py={10} my={'20'}>
        <Flex justifyContent={'space-around'}>
          <Box>
            <Heading fontWeight={'semibold'}>Join our Newletter</Heading>
            <Text mt={5}>
              Dont miss any more news and subscribe to our newsletter today.
            </Text>
          </Box>
          <HStack>
            <Input placeholder={'Enter your email'}></Input>
            <Button px={'12'} fontWeight={'semibold'}>
              Subscribe
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
