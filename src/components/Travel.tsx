'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export interface TravelDestination {
  title: string;
  description: string;
  images: string[];
  date: string;
}

interface TravelProps {
  destinations: TravelDestination[];
}

const Travel = ({ destinations }: TravelProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDestinationImages, setCurrentDestinationImages] = useState<string[]>([]);

  const openLightbox = (destinationIndex: number, imageIndex: number) => {
    setCurrentDestinationImages(destinations[destinationIndex].images);
    setCurrentIndex(imageIndex);
    setOpen(true);
  };

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'white');
  const yearColor = useColorModeValue('blue.600', 'blue.300');

  return (
    <Box as="section" py={20} bg={bgColor} minH="100vh">
      <Container maxW="7xl">
        <VStack spacing={20} align="stretch">
          <Box textAlign="center" mb={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Travel Adventures
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Exploring the world, one destination at a time
            </Text>
          </Box>

          <VStack spacing={12} align="stretch">
            {destinations.map((destination, index) => (
              <VStack key={destination.title} spacing={4} align="stretch">
                <Box>
                  <Heading as="h2" size="xl" color={headingColor} mb={1}>
                    {destination.title}
                  </Heading>
                  <Text fontSize="lg" color={yearColor} mb={2}>
                    {destination.date}
                  </Text>
                  <Text fontSize="lg" color="gray.600" maxW="3xl" mb={3}>
                    {destination.description}
                  </Text>
                </Box>

                <SimpleGrid
                  columns={{
                    base: 1,
                    sm: Math.min(2, destination.images.length),
                    md: Math.min(3, destination.images.length),
                  }}
                  spacing={8}
                  w="full"
                >
                  {destination.images.map((imageUrl, imgIndex) => (
                    <Box
                      key={imageUrl}
                      h="300px"
                      bgImage={`url(${imageUrl})`}
                      bgSize="cover"
                      bgPosition="center"
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow="lg"
                      transition="all 0.3s"
                      cursor="pointer"
                      onClick={() => openLightbox(index, imgIndex)}
                      _hover={{
                        transform: 'scale(1.02)',
                        boxShadow: 'xl',
                      }}
                    />
                  ))}
                </SimpleGrid>

                {index < destinations.length - 1 && (
                  <Box h="1px" bg="gray.200" w="full" mt={6} mb={2} />
                )}
              </VStack>
            ))}
          </VStack>
        </VStack>
      </Container>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentDestinationImages.map(url => ({ src: url }))}
        index={currentIndex}
      />
    </Box>
  );
};

export default Travel;
