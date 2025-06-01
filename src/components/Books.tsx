'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

interface Book {
  title: string;
  author?: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  year: number;
}

const Books = () => {
  const books: Book[] = [
    {
      title: "The Illumination on Abandoning Self-Direction",
      description: "Al-Tanwir fi Isqat Al-Tadbir",
      author: "Ibn Ata Allah Al-Iskandari",
      year: 2025,
      category: "Spiritual Growth"
    },
    {
      title: "The Afterlife Manual: Every Muslim's Guide to Happily Ever Hereafter",
      author: "Ousama Iyad Alshurafa",
      year: 2025,
      category: "Islamic Studies"
    },
    {
      title: "Al-Ghazali on Disciplining the Soul & on Breaking the Two Desires",
      author: "Al-Ghazali",
      year: 2025,
      category: "Islamic Studies"
    },
    {
      title: "Diseases of the Heart and Their Cure",
      author: "Shaykh Al-Islam Ibn Taymiya",
      year: 2025,
      category: "Islamic Studies"
    },
    {
      title: "Al Ghazali on Patience and Thankfulness",
      author: "Al-Ghazali",
      year: 2025,
      category: "Islamic Studies"
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      year: 2024,
      category: "Productivity"
    },
    {
      title: "Digital Minimalism",
      author: "Cal Newport",
      year: 2024,
      category: "Productivity"
    },
    {
      title: "Kalila and Dimna",
      author: "Nasrullah Munshi",
      year: 2024,
      category: "Literature"
    },
    {
      title: "The Beginning of Guidance: The Imam and proof of Islam",
      author: "Al-Ghazali",
      year: 2024,
      category: "Islamic Studies"
    },
    {
      title: "The Consolation of Philosophy",
      author: "Boethius",
      year: 2024,
      category: "Philosophy"
    },
    {
      title: "Stolen Focus: Why You Can't Pay Attention",
      author: "Johann Hari",
      year: 2024,
      category: "Psychology"
    },
    {
      title: "Hidden Potential: The Science of Achieving Greater Things",
      author: "Adam Grant",
      year: 2024,
      category: "Psychology"
    },
    {
      title: "Made to Stick: Why Some Ideas Survive and Others Die",
      author: "Dan Heath",
      year: 2024,
      category: "Business & Psychology"
    }
    // Add more books as needed
  ];

  const booksByYear = books.reduce((acc, book) => {
    if (!acc[book.year]) {
      acc[book.year] = [];
    }
    acc[book.year].push(book);
    return acc;
  }, {} as Record<number, Book[]>);

  const years = Object.keys(booksByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const categoryBg = useColorModeValue('blue.50', 'blue.900');
  const categoryColor = useColorModeValue('blue.600', 'blue.200');
  const yearColor = useColorModeValue('blue.600', 'blue.400');

  return (
    <Box as="section" py={20} bg={bgColor} minH="100vh">
      <Container maxW="6xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading as="h2" size="2xl" mb={4}>
              Reading Journey
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Books that shape my understanding and perspective
            </Text>
          </Box>

          {years.map((year) => (
            <VStack key={year} spacing={8} align="stretch" w="full">
              <Heading as="h3" size="xl" color={yearColor} textAlign="center">
                {year}
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {booksByYear[year].map((book, index) => (
                  <Box
                    key={index}
                    bg={cardBg}
                    rounded="xl"
                    shadow="lg"
                    overflow="hidden"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}
                    transition="all 0.3s"
                  >
                    <Box p={6}>
                      <Badge
                        bg={categoryBg}
                        color={categoryColor}
                        mb={4}
                        px={3}
                        py={1}
                        rounded="full"
                      >
                        {book.category}
                      </Badge>
                      
                      <Heading as="h4" size="md" mb={2}>
                        {book.title}
                      </Heading>
                      
                      {book.description && (
                        <Text color="gray.500" fontSize="md" mb={2} fontStyle="italic">
                          {book.description}
                        </Text>
                      )}
                      
                      {book.author && (
                        <Text color="gray.500" fontSize="sm">
                          by {book.author}
                        </Text>
                      )}
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Books; 