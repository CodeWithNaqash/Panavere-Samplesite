import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Image,
  HStack,
  Button,
  Flex,
  Link,
  Show,
  Hide,
  useColorMode,
} from '@chakra-ui/react';
import Burger from './Burger';
import ColorModeSwitch from './ColorModeSwitch';
import NavMenu from './NavMenu';

export default function Header() {
  const { colorMode } = useColorMode();

  return (
    <Box as="header" position={'sticky'} top="0" zIndex={1}>
      {/* left area */}
      <Flex
        justifyContent={'space-around'}
        alignItems={'center'}
        bg={colorMode == 'dark' ? 'black' : 'white'}
        py="5"
      >
        {/* Left area */}
        <Box>
          <HStack>
            <Image src="/images/Logo.webp" alt="logo" />
            <Hide below="md">
              {/* Import NavMenu */}
              <HStack spacing={10} pl="10">
                <NavMenu />
              </HStack>
              {/* Import NavMenu */}
            </Hide>
          </HStack>
        </Box>
        {/* right area */}
        <HStack>
          <Box pl="15">
            <SearchIcon w="25" h="25" />
          </Box>
          {/* <Box pl="15">
            <MoonIcon w="25" h="25" />
          </Box> */}
          <ColorModeSwitch />

          <Show below="md">
            <Burger />
          </Show>
          <Link href="http://piaic.org/" target={'_blank'}>
            <Button variant={'outline'}>Go to Piaic</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
