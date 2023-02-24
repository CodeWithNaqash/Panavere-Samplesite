import { SearchIcon } from '@chakra-ui/icons';
import { MoonIcon } from '@chakra-ui/icons';
import {
  Heading,
  Box,
  Image,
  HStack,
  List,
  ListItem,
  Button,
  Flex,
  Link,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <Box as="header" position={'sticky'} top={0} zIndex={1}>
      <Flex
        py={3}
        justifyContent={'space-around'}
        alignItems="center"
        bg={'white'}
      >
        {/* left area */}
        <Box>
          <HStack>
            <Image src="/images/Logo.webp" alt="logo" />
            <List>
              <HStack spacing={10} ml="40px" fontWeight={'bold'}>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        {/* right area */}
        <Box>
          <Flex alignItems={'center'}>
            <Box pl={'5'} as="span">
              <SearchIcon w={25} h={25}></SearchIcon>
            </Box>
            <Box px={'5'} as="span">
              <MoonIcon w={25} h={25}></MoonIcon>
            </Box>
            <Link
              href="https://www.piaic.org
"
              target={'_blank'}
            >
              <Button variant={'outline'}>Go to PIAIC</Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
