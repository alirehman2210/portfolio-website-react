'use client';

import Image from 'next/image';
import NextLink from 'next/link';
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
  LinkBox,
  LinkOverlay,
  Badge,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
// import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { technicalProjects } from '@/data/projects';

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
                    Senior Product Manager & AI Builder
                  </Heading>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.600"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    I&apos;ve spent the last decade leading products across complex operational environments, from port logistics at Octopi and enterprise cloud at HPE to AI-driven automation at HelloFresh.
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.600"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    I combine product strategy with hands-on execution, taking ideas from discovery to launch. Today, I use AI-assisted development to build working prototypes, automate workflows, and turn complex business problems into practical solutions.
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.500"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    Outside of work, you&apos;ll usually find me training martial arts, staying active, or reading.
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
                    src="/images/PicOfMe.png"
                    alt="Ali Rehman"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '12px' }}
                    priority
                    quality={95}
                  />
                </Box>
              </Flex>

              {/* Primary CTA + Social Buttons */}
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={{ base: 3, sm: 4 }}
                justify={{ base: "center", md: "flex-start" }}
                w="full"
              >
                <NextLink href="/projects" passHref>
                  <Button
                    colorScheme="blue"
                    size={{ base: "md", md: "lg" }}
                    width={{ base: "full", sm: "auto" }}
                    cursor="pointer"
                    rightIcon={<ArrowForwardIcon />}
                    _hover={{
                      transform: "translateY(-2px)",
                      shadow: "md"
                    }}
                    transition="all 0.2s ease-in-out"
                  >
                    View My Projects
                  </Button>
                </NextLink>
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
            </Stack>
          </Box>

          {/* Featured Work */}
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
            <Stack spacing={{ base: 6, md: 8 }}>
              <Stack spacing={1} textAlign={{ base: "center", md: "left" }}>
                <Heading as="h2" size="xl">
                  Featured Work
                </Heading>
                <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
                  AI Prototypes
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
                {technicalProjects.map((project) => (
                  <LinkBox
                    key={project.id}
                    as="article"
                    p={{ base: 5, md: 6 }}
                    bg="white"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="gray.200"
                    transition="all 0.2s ease"
                    _hover={{
                      transform: "translateY(-2px)",
                      shadow: "md",
                      borderColor: "gray.300"
                    }}
                    _focusWithin={{
                      shadow: "outline",
                      borderColor: "blue.400"
                    }}
                  >
                    <Stack spacing={3} height="full">
                      <Badge
                        bg="blue.50"
                        color="blue.700"
                        px={2}
                        py={1}
                        rounded="md"
                        textTransform="none"
                        fontWeight="medium"
                        alignSelf="flex-start"
                      >
                        Prototype
                      </Badge>

                      <Flex justify="space-between" align="flex-start" gap={3}>
                        <LinkOverlay as={NextLink} href={`/projects#${project.id}`}>
                          <Heading as="h3" size="sm" lineHeight="1.4">
                            {project.name}
                          </Heading>
                        </LinkOverlay>
                        <ArrowForwardIcon color="gray.400" mt={1} flexShrink={0} aria-hidden="true" />
                      </Flex>

                      <Text fontSize="sm" color="gray.600">
                        {project.summary}
                      </Text>

                      <Text fontSize="xs" color="gray.500" mt="auto" pt={2}>
                        {project.stack}
                      </Text>
                    </Stack>
                  </LinkBox>
                ))}
              </SimpleGrid>
            </Stack>
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
