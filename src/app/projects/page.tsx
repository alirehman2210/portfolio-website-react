'use client';

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Navigation from '@/components/Navigation';
import ProjectShowcase from '@/components/ProjectShowcase';
import { additionalProjects, personalProjects } from '@/data/projects';

export default function Projects() {
  return (
    <Box bg="#F9FAFB" minH="100vh">
      <Navigation />

      <Container maxW="6xl" py={{ base: 8, md: 12 }}>
        <Stack spacing={6}>
          {/* Featured projects, one at a time. */}
          <Box
            bg="white"
            px={{ base: 5, md: 8 }}
            pt={6}
            pb={8}
            rounded="xl"
            shadow="sm"
            borderWidth="1px"
            borderColor="gray.100"
          >
            <Heading as="h2" size="lg">
              Featured Technical Projects
            </Heading>
            <Text color="gray.600" mt={2} maxW="3xl">
              Explore how I use AI, automation, and practical engineering to solve
              complex problems.
            </Text>

            <Box mt={6}>
              <ProjectShowcase />
            </Box>
          </Box>

          {/* Additional prototypes: real, but without a published repository
              behind them, so they get a smaller entry rather than a showcase.
              Hidden while the list is empty, rather than showing a bare
              heading with nothing under it. */}
          {additionalProjects.length > 0 && (
          <Box
            bg="white"
            px={{ base: 5, md: 8 }}
            pt={6}
            pb={6}
            rounded="xl"
            shadow="sm"
            borderWidth="1px"
            borderColor="gray.100"
          >
            <Heading as="h2" size="md">
              Additional Prototypes
            </Heading>

            <Stack spacing={5} mt={5}>
              {additionalProjects.map((project) => (
                <Box key={project.id} id={project.id} scrollMarginTop="100px">
                  <Flex align="center" gap={3} wrap="wrap">
                    <Heading as="h3" size="sm">
                      {project.name}
                    </Heading>
                    <Badge
                      bg="gray.100"
                      color="gray.700"
                      px={2}
                      rounded="md"
                      textTransform="none"
                      fontWeight="medium"
                      fontSize="xs"
                    >
                      Prototype
                    </Badge>
                  </Flex>
                  <Text fontSize="sm" color="gray.700" mt={2} maxW="3xl">
                    {project.summary}
                  </Text>
                  <Wrap spacing={2} mt={3}>
                    {project.stack.map((item) => (
                      <WrapItem key={item}>
                        <Text
                          fontSize="xs"
                          color="gray.600"
                          bg="gray.50"
                          borderWidth="1px"
                          borderColor="gray.200"
                          rounded="md"
                          px={2}
                          py="3px"
                        >
                          {item}
                        </Text>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              ))}
            </Stack>
          </Box>
          )}

          {/* Personal Projects */}
          <Box
            bg="white"
            px={{ base: 5, md: 8 }}
            pt={6}
            pb={6}
            rounded="xl"
            shadow="sm"
            borderWidth="1px"
            borderColor="gray.100"
          >
            <Heading as="h2" size="lg">
              Personal Projects
            </Heading>

            <Stack spacing={6} mt={6}>
              {personalProjects.map((project) => (
                <Box key={project.id} id={project.id} scrollMarginTop="100px">
                  <Heading as="h3" size="md">
                    {project.name}
                  </Heading>
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
