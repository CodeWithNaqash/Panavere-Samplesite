import { Flex, Box, Container, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box>
      <Container maxW={'100%'} bg={'gray.100'}>
        <Flex justifyContent={'space-between'}>
          <Text color={'gray.500'} py={7}>
            © 2023 Panaverse. All rights reserved.
          </Text>
          <HStack>
            <Box pl={'5'} as="span" color={'gray.500'}>
              <Link href={'https://github.com'}>
                <FaGithub size={30}></FaGithub>
              </Link>
            </Box>
            <Box pl={'5'} as="span" color={'gray.500'}>
              <Link href={'https://facebook.com'}>
                <FaFacebook size={30}></FaFacebook>
              </Link>
            </Box>
            <Box pl={'5'} as="span" color={'gray.500'}>
              <Link href={'https://discord.com'}>
                <FaDiscord size={30}></FaDiscord>
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
