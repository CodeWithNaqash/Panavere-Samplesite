import {
  Text,
  Box,
  Heading,
  Container,
  SimpleGrid,
  HStack,
} from '@chakra-ui/react';
import { IoIosRocket } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';
import { IoIosBrush } from 'react-icons/io';
import { HiCodeBracket } from 'react-icons/hi2';
import { FaWheelchair } from 'react-icons/fa';

function Features() {
  return (
    <Box as="section">
      <Box my="16" textAlign={'center'}>
        <Text color={'blue.500'} fontWeight={'bold'} pb="5" fontSize={'18'}>
          Features
        </Text>
        <Heading fontWeight={'semibold'} pb="5">
          What you can expect?
        </Heading>
        <Container maxW={'800'}>
          <Text fontSize={'2xl'}>
            A bundle of 220+ ready-to-use, responsive and accessible components
            with clever structured sourcecode files.
          </Text>
        </Container>
      </Box>
      <Container maxW={'1100'}>
        {/* Feature Section Start*/}
        <Box>
          <SimpleGrid columns={2} spacing={8}>
            {/* Feature 1 */}
            <Box>
              <HStack>
                <Box color="blue.500">
                  <AiOutlineStar size={50}></AiOutlineStar>
                </Box>
                <Box>
                  <Text fontSize={'18'} fontWeight={'bold'}>
                    220+ Components
                  </Text>
                  <Text fontSize={'18'}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* Feature 2 */}
            <Box>
              <HStack>
                <Box color="blue.500">
                  <FiMoon size={50}></FiMoon>
                </Box>
                <Box>
                  <Text fontSize={'18'} fontWeight={'bold'}>
                    Light & Dark
                  </Text>
                  <Text fontSize={'18'}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* Feature 3 */}
            <Box>
              <HStack>
                <Box color="blue.500">
                  <IoIosRocket size={50}></IoIosRocket>
                </Box>
                <Box>
                  <Text fontSize={'18'} fontWeight={'bold'}>
                    Themable
                  </Text>
                  <Text fontSize={'18'}>
                    Your style. Your brand. Customize the components as you need
                    them. It&apos;s that simple.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* Feature 4 */}
            <Box>
              <HStack>
                <Box color="blue.500">
                  <IoIosBrush size={50}></IoIosBrush>
                </Box>
                <Box>
                  <Text fontSize={'18'} fontWeight={'bold'}>
                    Themable
                  </Text>
                  <Text fontSize={'18'}>
                    Your style. Your brand. Customize the components as you need
                    them. It&apos;s that simple.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* Feature 5 */}
            <Box>
              <HStack>
                <Box color="blue.500">
                  <HiCodeBracket size={50}></HiCodeBracket>
                </Box>
                <Box>
                  <Text fontSize={'18'} fontWeight={'bold'}>
                    Developer Friendly
                  </Text>
                  <Text fontSize={'18'}>
                    Components are semantically divided into several files for
                    better developer experience.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* Feature 6 */}
            <Box>
              <HStack>
                <Box color="blue.500">
                  <FaWheelchair size={50}></FaWheelchair>
                </Box>
                <Box>
                  <Text fontSize={'18'} fontWeight={'bold'}>
                    Accessible
                  </Text>
                  <Text fontSize={'18'}>
                    Accessibility first. That&apos;s why we pay attention to
                    accessibility right from the start.
                  </Text>
                </Box>
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>
        {/* Feature Section End*/}
      </Container>
    </Box>
  );
}

export default Features;
