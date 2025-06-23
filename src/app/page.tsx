'use client';

import Image from 'next/image';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  SimpleGrid,
  Flex,
  Button,
} from '@chakra-ui/react';
// import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function Home() {
  // const fadeIn = { /* animation values */ };
  return (
    <Box bg="#F9FAFB" minH="100vh">
      <Navigation />
      
      <Container maxW="6xl" py={{ base: 10, md: 12 }}>
        <Stack spacing={{ base: 6, md: 8 }} align="stretch">
          {/* Hero Section */}
          <Box 
            as="section" 
            bg="white" 
            p={{ base: 6, md: 8 }} 
            rounded="2xl" 
            shadow="sm"
            borderWidth="1px"
            borderColor="gray.100"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(to right, #E2E8F0, #CBD5E0)",
              borderTopRadius: "2xl"
            }}
          >
            <Stack spacing={{ base: 6, md: 8 }}>
              {/* Top Section: Title, Subtitle, and Photo */}
              <Flex 
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 6, md: 8 }}
                align={{ base: 'center', md: 'start' }}
              >
                {/* Left: Title and Subtitle */}
                <Stack spacing={4} flex="1">
                  <Heading 
                    as="h1" 
                    size="2xl" 
                    lineHeight="1.2"
                    fontWeight="bold"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    Product Leader & Strategic Thinker
                  </Heading>
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.600"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    Product Leader with a proven track record of accelerating platform growth, automation, and strategic innovation through data-driven insights and experimentation. Relocated from Washington, D.C. to Berlin to immerse in Europe's vibrant tech ecosystem, building scalable, user-centric solutions that deliver global impact.
                  </Text>
                </Stack>

                {/* Right: Profile Photo */}
                <Box 
                  position="relative" 
                  width={{ base: "200px", md: "220px" }}
                  height={{ base: "200px", md: "220px" }}
                  flexShrink={0}
                >
                  <Image
                    src="/travels/2025/french-riviera/pictureb.jpeg"
                    alt="Ali Rehman"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '12px' }}
                    priority
                    quality={95}
                  />
                </Box>
              </Flex>

              {/* Social Buttons */}
              <Stack 
                direction={{ base: "column", sm: "row" }}
                spacing={{ base: 3, sm: 4 }}
                justify={{ base: "center", md: "flex-start" }}
                w="full"
              >
                <Link href="https://github.com/alirehman2210" isExternal>
                  <Button 
                    variant="outline" 
                    size={{ base: "md", md: "lg" }}
                    width={{ base: "full", sm: "auto" }}
                    cursor="pointer"
                    _hover={{ 
                      bg: "blue.50",
                      transform: "translateY(-2px)",
                      shadow: "md",
                      borderColor: "blue.400",
                      color: "blue.600"
                    }}
                    transition="all 0.2s ease-in-out"
                  >
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/ali-r-b3888b207/" isExternal>
                  <Button 
                    variant="outline"
                    size={{ base: "md", md: "lg" }}
                    width={{ base: "full", sm: "auto" }}
                    cursor="pointer"
                    _hover={{ 
                      bg: "blue.50",
                      transform: "translateY(-2px)",
                      shadow: "md",
                      borderColor: "blue.400",
                      color: "blue.600"
                    }}
                    transition="all 0.2s ease-in-out"
                  >
                    LinkedIn
                  </Button>
                </Link>
                <Link href="mailto:alirehman2210@gmail.com" width={{ base: "full", sm: "auto" }}>
                  <Button 
                    variant="outline"
                    size={{ base: "md", md: "lg" }}
                    width="full"
                    cursor="pointer"
                    _hover={{ 
                      bg: "blue.50",
                      transform: "translateY(-2px)",
                      shadow: "md",
                      borderColor: "blue.400",
                      color: "blue.600"
                    }}
                    transition="all 0.2s ease-in-out"
                  >
                    Email
                  </Button>
                </Link>
              </Stack>

              {/* AI Work Description */}
              <Text 
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700" 
                lineHeight="tall"
                textAlign={{ base: "center", md: "left" }}
              >
                Currently focused on AI-enhanced security products, building internal tools that automate workflows, accelerate incident response, and enable faster, data-informed decision-making.
              </Text>

              {/* Impact Metrics */}
              <SimpleGrid 
                columns={{ base: 1, sm: 3 }} 
                spacing={4}
                pt={{ base: 2, md: 4 }}
              >
                {[
                  { number: "12+", label: "Products Launched" },
                  { number: "25+", label: "Strategic Initiatives Supported" },
                  { number: "3", label: "Products Shipped Across 3 Continents" }
                ].map((metric, index) => (
                  <Box
                    key={index}
                    p={{ base: 4, md: 6 }}
                    borderWidth="1px"
                    borderRadius="xl"
                    textAlign="center"
                    bg="white"
                    _hover={{
                      transform: "translateY(-2px)",
                      shadow: "lg",
                      borderColor: "gray.300"
                    }}
                    transition="all 0.2s"
                  >
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={2}>
                      {metric.number}
                    </Text>
                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>{metric.label}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Box>

          {/* Core Skills & Technologies Section */}
          <Box 
            as="section" 
            bg="#F8FAFC"
            p={{ base: 6, md: 8 }}
            rounded="2xl" 
            shadow="sm"
            borderWidth="1px"
            borderColor="gray.100"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(to right, #E2E8F0, #CBD5E0)",
              borderTopRadius: "2xl"
            }}
          >
            <Stack spacing={{ base: 8, md: 10 }} align="center">
              <Heading as="h2" size="xl" textAlign="center">
                Core Skills & Technologies
              </Heading>
              <SimpleGrid 
                columns={{ base: 2, md: 3, lg: 4 }} 
                spacing={{ base: 4, md: 6 }}
                w="full"
              >
                {[
                  { name: 'Product Strategy', icon: '🎯', color: '#EBF8FF' },
                  { name: 'User Research', icon: '🔍', color: '#F0FFF4' },
                  { name: 'Data Analysis', icon: '📊', color: '#FAF5FF' },
                  { name: 'Agile Management', icon: '🔄', color: '#FFF5F5' },
                  { name: 'Stakeholder Communication', icon: '🤝', color: '#FFFAF0' },
                  { name: 'Technical Leadership', icon: '💡', color: '#F0F5FF' },
                  { name: 'AWS', icon: '☁️', color: '#EDF2F7' },
                  { name: 'Experimentation & A/B Testing', icon: '🧪', color: '#F7FAFC' },
                  { name: 'Prioritization & Tradeoffs', icon: '🔄', color: '#EDF2F7' },
                  { name: 'Confluence', icon: '📝', color: '#F7FAFC' },
                  { name: 'Cloud Engineering', icon: '🌐', color: '#EBF8FF' },
                  { name: 'AI', icon: '🧠', color: '#F0FFF4' },
                ].map((skill) => (
                  <Box
                    key={skill.name}
                    p={{ base: 4, md: 6 }}
                    bg="white"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="gray.200"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-2px)",
                      shadow: "md",
                      borderColor: "gray.300",
                      bg: skill.color
                    }}
                    textAlign="center"
                  >
                    <Text fontSize={{ base: "xl", md: "2xl" }} mb={2}>{skill.icon}</Text>
                    <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>{skill.name}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Box>

          {/* Quote Section */}
          <Box 
            as="section" 
            bg="white" 
            py={{ base: 10, md: 12 }}
            px={{ base: 6, md: 8 }}
            rounded="2xl" 
            shadow="sm"
            borderWidth="1px"
            borderColor="gray.100"
            textAlign="center"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(to right, #E2E8F0, #CBD5E0)",
              borderTopRadius: "2xl"
            }}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontStyle="italic"
              color="gray.700"
              letterSpacing="wide"
              lineHeight="tall"
              fontWeight="medium"
              maxW="3xl"
              mx="auto"
            >
              &quot;Knowledge without action is wastefulness, and action without knowledge is foolishness.&quot;
            </Text>
          </Box>
        </Stack>
      </Container>

      {/* Footer */}
      <Box as="footer" borderTopWidth="1px" borderColor="gray.200" bg="white" py={6}>
        <Container maxW="4xl">
          <Text color="gray.500" fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} Ali Rehman. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
