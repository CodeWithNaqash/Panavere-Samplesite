import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Flex,
  Input,
  Text,
  useColorMode,
} from '@chakra-ui/react';

export default function Newsletter() {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Container
        bg={colorMode == 'light' ? 'gray.50' : 'black'}
        maxW="100%"
        py={10}
        my={'20'}
      >
        <Flex
          justifyContent={'space-around'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
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
