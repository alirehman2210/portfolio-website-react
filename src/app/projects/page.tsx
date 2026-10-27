'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Badge,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Navigation from '@/components/Navigation';
import { technicalProjects, personalProjects } from '@/data/projects';

export default function Projects() {
  return (
    <Box bg="#F9FAFB" minH="100vh">
      <Navigation />

      <Container maxW="6xl" py={{ base: 8, md: 12 }}>
        <Stack spacing={2}>
          {/* Featured Technical Projects */}
          <Box bg="white" px={8} pt={6} pb={6} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Featured Technical Projects</Heading>
            <Text color="gray.600" mt={2}>
              Hands-on projects spanning agentic AI, logistics optimization, and intelligent workflow automation.
            </Text>

            <Stack spacing={8} mt={6} divider={<Divider borderColor="gray.100" />}>
              {technicalProjects.map((project) => (
                <Box key={project.id} id={project.id} scrollMarginTop="100px">
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align={{ base: 'flex-start', md: 'center' }}
                    gap={{ base: 2, md: 4 }}
                  >
                    <Heading as="h3" size="md">{project.name}</Heading>
                    <Badge
                      bg="blue.50"
                      color="blue.700"
                      px={2}
                      py={1}
                      rounded="md"
                      textTransform="none"
                      fontWeight="medium"
                      flexShrink={0}
                    >
                      Prototype
                    </Badge>
                  </Flex>

                  <Stack spacing={4} mt={4}>
                    <Box>
                      <Text fontWeight="bold" fontSize="sm" color="gray.700">Problem</Text>
                      <Text mt={1}>{project.problem}</Text>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize="sm" color="gray.700">What I built</Text>
                      <Text mt={1}>{project.built}</Text>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize="sm" color="gray.700">Key capabilities</Text>
                      <UnorderedList mt={1} spacing={2} stylePosition="outside">
                        {project.capabilities.map((capability) => (
                          <ListItem key={capability}>{capability}</ListItem>
                        ))}
                      </UnorderedList>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize="sm" color="gray.700">Tech stack</Text>
                      <Text mt={1} color="gray.600">{project.stack}</Text>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Personal Projects */}
          <Box bg="white" px={8} pt={6} pb={6} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Personal Projects</Heading>

            <Stack spacing={6} mt={6}>
              {personalProjects.map((project) => (
                <Box key={project.id} id={project.id} scrollMarginTop="100px">
                  <Heading as="h3" size="md">{project.name}</Heading>
                  <UnorderedList mt={2} spacing={2} stylePosition="outside">
                    {project.details.map((detail) => (
                      <ListItem key={detail}>{detail}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
