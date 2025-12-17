'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Tag,
  useColorModeValue,
  // Badge, // Commented out - unused
  // Divider, // Commented out - unused
} from '@chakra-ui/react';
// import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'AI & Automation',
    'Data Analysis',
    'Product Metrics',
    'Stakeholder Alignment',
    'Cloud & Security Strategy',
    'Go-to-Market (Internal Tools)',
    'API & Platform Thinking',
    'Product Growth',
    'A/B Testing & Experiments',
    'Systems Thinking',
    'Agile Roadmapping',
    'Developer Experience (DevEx)',
  ];

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const tagBg = useColorModeValue('blue.50', 'blue.900');
  const tagColor = useColorModeValue('blue.600', 'blue.200');

  return (
    <Box as="section" py={20} bg={bgColor}>
      <Container maxW="4xl">
        <VStack spacing={12}>
          <Heading as="h2" size="2xl" textAlign="center">
            About Me
          </Heading>
          
          <Box bg={cardBg} rounded="2xl" shadow="lg" p={8} w="full">
            <VStack spacing={6} align="stretch">
              <Text fontSize="lg">
                I am an avid reader, spontaneous traveler, and fitness enthusiast drawn to deep conversations, last-minute adventures, and books that reshape how you see the world. I bring curiosity and intention to everything I do, whether I am exploring a new city or a new idea.
              </Text>
              
              <Text fontSize="lg">
                Originally from Washington, D.C. and am now based in Berlin. I work in product management within Europe&apos;s growing tech ecosystem. I thrive at the intersection of strategy, systems thinking, and user empathy, leading cross-functional teams to solve real problems across cybersecurity, supply chain, and AI-driven products.
              </Text>

              <VStack align="stretch" mt={6} spacing={6}>
                <Heading as="h3" size="lg">
                  Personal Projects
                </Heading>
                <VStack align="stretch" spacing={6}>
                  <Box>
                    <Text fontSize="md" fontWeight="bold" mb={3}>
                      1. AI-Driven Knowledge Retention Newsletter
                    </Text>
                    <VStack align="stretch" spacing={2} pl={4}>
                      <Text fontSize="md">
                        • Designed and launched an automated AI newsletter that distills long-form content (articles, YouTube transcripts, and PDFs) into structured summaries delivered via email, growing the audience to 100+ readers.
                      </Text>
                      <Text fontSize="md">
                        • Built the product to solve a personal retention problem: preventing knowledge decay after consuming high-volume educational content by reinforcing learning through repetition and reflection.
                      </Text>
                      <Text fontSize="md">
                        • Implemented automated content ingestion, AI summarization, mobile-optimized email rendering, and subscriber management using Google Apps Script and OpenAI APIs.
                      </Text>
                    </VStack>
                  </Box>
                  
                  <Box>
                    <Text fontSize="md" fontWeight="bold" mb={3}>
                      2. Personal Knowledge Site | ali-rehman.com
                    </Text>
                    <VStack align="stretch" spacing={2} pl={4}>
                      <Text fontSize="md">
                        • Built a personal site to intentionally track books read by year and document personal travel through curated photography, creating a long-term record of learning and lived experiences.
                      </Text>
                      <Text fontSize="md">
                        • Designed the site as a lightweight system to preserve, timelines, and personal milestones.
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </VStack>

              <VStack align="stretch" mt={12} spacing={6}>
                <Heading as="h3" size="lg">
                  Core Competencies
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                  {skills.map((skill, index) => (
                    <Tag
                      key={index}
                      size="lg"
                      bg={tagBg}
                      color={tagColor}
                      py={3}
                      px={4}
                      borderRadius="lg"
                      justifyContent="center"
                      textAlign="center"
                      height="auto"
                      minHeight="2.5rem"
                      whiteSpace="normal"
                      display="flex"
                      alignItems="center"
                      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Tag>
                  ))}
                </SimpleGrid>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 