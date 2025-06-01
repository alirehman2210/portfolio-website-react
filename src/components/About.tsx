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
} from '@chakra-ui/react';

const About = () => {
  const skills = [
    'AI & Automation Enablement',
    'User Research & Behavioral Analytics',
    'Agile Delivery & Roadmap Ownership',
    'Stakeholder Influence & Cross-Team Alignment',
    'Security Product Strategy (Cloud & Infra)',
    'Go-to-Market Planning for Internal Tools',
    'API Design & Platform Thinking',
    'Operational Efficiency & Cost Optimization',
    'Vertical SaaS Strategy',
    'Process Mapping & Systems Thinking'
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
                Avid reader, spontaneous traveler, and fitness enthusiast — I enjoy deep conversations, last-minute adventures, and the kind of books that change how you see the world. Whether I'm diving into a new city or a new book, I bring curiosity, energy, and intention to everything I do.
              </Text>
              
              <Text fontSize="lg">
                Professionally, I'm a Product Manager who thrives at the intersection of strategy, systems thinking, and user empathy. I specialize in leading cross-functional teams to build and scale products that solve real problems — from automating cybersecurity workflows to improving infrastructure for high-growth environments. I love connecting the dots between business goals and user needs, especially when the path forward is unclear or complex.
              </Text>
              
              <Text fontSize="lg">
                With experience across B2B SaaS, internal tooling, and security platforms, I've shipped solutions that not only meet technical requirements but align with long-term vision and impact. I'm deeply invested in asking better questions, reducing noise, and helping teams move faster with clarity and confidence.
              </Text>
              
              <Text fontSize="lg">
                Above all, I value ownership, adaptability, and continuous learning — whether it's in product, life, or lifting.
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