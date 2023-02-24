import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';

export default function CTA() {
  return (
    <Box mt={14}>
      <Container maxW={1100} bg="blue.50" p={'14'} borderRadius={'10'}>
        <HStack>
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
        </HStack>
      </Container>
    </Box>
  );
}
