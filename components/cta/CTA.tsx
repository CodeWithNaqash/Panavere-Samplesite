import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

export default function CTA() {
  const { colorMode } = useColorMode();

  return (
    <Box mt={14}>
      <Container
        maxW={1100}
        bg={colorMode == 'light' ? 'blue.50' : 'black'}
        p={'14'}
        borderRadius={'10'}
      >
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box>
            <Heading mb={'5'}>Try our free components</Heading>
            <Text fontSize={'2xl'}>
              You don&apos;t have to buy a pig in a poke - you can experience
              our free community components before making a purchase decision.
            </Text>
          </Box>
          <Box alignSelf={'flex-start'}>
            <Button
              p={6}
              fontSize={18}
              mr={3}
              colorScheme={'blue'}
              type="button"
              float={'right'}
            >
              View Component
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
