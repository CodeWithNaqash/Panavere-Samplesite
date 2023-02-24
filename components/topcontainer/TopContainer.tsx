import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  HStack,
  Flex,
  Link,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
function TopContainer() {
  return (
    <Box
      backgroundImage={'/images/background.webp'}
      backgroundSize="contain"
      backgroundAttachment={'fixed'}
      py={20}
      mt="3"
      as="section"
    >
      <HStack>
        {/* Left Box */}
        <Box width={'50%'} textColor={'white'} pl="44">
          <Heading fontSize={60}>Build your next idea even faster</Heading>
          <Text lineHeight={'10'}>
            One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
            3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
            Ambient Computing/IoT Technologies
          </Text>
          <Box my="5">
            <Button
              p={6}
              fontSize={18}
              mr={3}
              colorScheme={'blue'}
              type="button"
            >
              Buy now
            </Button>
            <Button
              p={6}
              fontSize={18}
              type="button"
              colorScheme={'blue'}
              variant="outline"
            >
              View Component
            </Button>
          </Box>
          <Flex alignItems={'center'}>
            <AvatarGroup size="md" max={4} mt="5">
              <Avatar name="SirZia" src="/images/SirZia.jpeg" />
              <Avatar name="SirAdil" src="/images/Adil.jpeg" />
              <Avatar name="SirOwais" src="/images/owais.jpeg" />
              <Avatar name="Naqash" src="/images/profileMe.webp" />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <Text fontSize={18} mt="5" ml={5}>
              Tutorial By:{' '}
              <Link
                href="https://youtube.com/@owaisali124/"
                color={'blue.500'}
                target="_blank"
              >
                Sir Owais Ali
              </Link>
            </Text>
            <Text fontSize={18} mt="5" ml={5}>
              Created By:{' '}
              <Link
                href="https://github.com/CodeWithNaqash"
                color={'blue.500'}
                target="_blank"
              >
                Naqash Younas
              </Link>
            </Text>
          </Flex>
        </Box>

        {/* Rigth Box */}
        <Box width={'50%'}>
          <Image src="/images/banner.webp" alt="Loading Error"></Image>
        </Box>
      </HStack>
    </Box>
  );
}

export default TopContainer;
