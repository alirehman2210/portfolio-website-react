'use client';

import {
  Badge,
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import type { FlagshipProject } from '@/data/projects';

// A homepage card for one of the two documented projects.
//
// It leads with a result rather than a description, because "what it did" is
// the thing worth clicking on. The link carries the project's anchor, so the
// showcase on /projects opens on this project rather than the default one.
export default function ProjectPreviewCard({ project }: { project: FlagshipProject }) {
  return (
    <LinkBox
      as="article"
      p={{ base: 5, md: 6 }}
      bg="white"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.200"
      transition="border-color 0.15s ease, box-shadow 0.15s ease"
      _hover={{ borderColor: 'gray.300', shadow: 'sm' }}
    >
      <Stack spacing={3} h="100%">
        <Flex justify="space-between" align="center" gap={2}>
          <Badge
            bg="blue.50"
            color="blue.700"
            px={2}
            py={1}
            rounded="md"
            textTransform="none"
            fontWeight="medium"
          >
            Prototype
          </Badge>
          {/* The card opens the project showcase, not GitHub. The GitHub
              link lives inside the showcase panel. */}
          <Text fontSize="xs" color="gray.500">
            Explore Project
          </Text>
        </Flex>

        <Flex justify="space-between" align="flex-start" gap={3}>
          <LinkOverlay as={NextLink} href={`/projects#${project.id}`}>
            <Heading as="h3" size="sm" lineHeight="1.4">
              {project.name}
            </Heading>
          </LinkOverlay>
          <ArrowForwardIcon color="gray.400" mt={1} flexShrink={0} aria-hidden="true" />
        </Flex>

        <Text fontSize="sm" color="gray.600">
          {project.tagline}
        </Text>

        <Box borderLeftWidth="2px" borderLeftColor="blue.300" pl={3} py="2px" mt="auto">
          <Text fontSize="sm" color="gray.700" fontWeight="medium">
            {project.cardResult}
          </Text>
          <Text fontSize="xs" color="gray.500" mt={1}>
            From its test suite, on a synthetic scenario
          </Text>
        </Box>

        <Text fontSize="xs" color="gray.500" pt={1}>
          {project.stack.join(' · ')}
        </Text>
      </Stack>
    </LinkBox>
  );
}
