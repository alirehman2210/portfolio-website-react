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
                Avid reader, spontaneous traveler, and fitness enthusiast that enjoys deep conversations, last-minute adventures, and the kind of books that change how you see the world. Whether I&apos;m diving into a new city or a new book, I try to bring curiosity, energy, and intention to everything I do.
              </Text>
              
              <Text fontSize="lg">
                Professionally, I'm a Product Manager who thrives at the intersection of strategy, systems thinking, and user empathy. I lead cross-functional teams to build products that solve real problems, from automating cybersecurity workflows to improving front-end architecture and user experience for enterprise platforms. I enjoy translating complex needs into focused product decisions and creating alignment when the path forward is unclear.
              </Text>
              
              <Text fontSize="lg">
                Originally from Washington, D.C., I relocated to Berlin to join Europe's growing tech ecosystem and build impactful products at scale. With experience across B2B SaaS, platform tools, and security infrastructure, I've shipped solutions that not only meet technical requirements but also align with long-term business strategy and product vision. I'm deeply invested in asking better questions, reducing noise, and helping teams move faster with clarity and confidence.
              </Text>
              
              <Text fontSize="lg">
                I value ownership, adaptability, and continuous learning  whether it&apos;s in product or life.
              </Text>

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