'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { flagshipProjects } from '@/data/projects';
import { ComparisonVisual, ShortageVisual } from '@/components/ProjectVisuals';

const panelIdFor = (id: string) => `${id}-panel`;

function otherProject(currentId: string) {
  return flagshipProjects.find((project) => project.id !== currentId);
}

function isKnownId(value: string): boolean {
  return flagshipProjects.some((project) => project.id === value);
}

export default function ProjectShowcase() {
  const [selectedId, setSelectedId] = useState(flagshipProjects[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Brings the whole selector group into view, rather than the single tab the
  // anchor points at. Landing on the second project otherwise leaves the first
  // selector above the fold, or tucked under the fixed header.
  const revealSelectors = useCallback(() => {
    containerRef.current?.scrollIntoView({ block: 'start' });
  }, []);

  // Deep links decide what is selected. `/projects#<id>` has to open on that
  // project, and so does the browser's back button, so the hash is the source
  // of truth rather than something the component writes and forgets.
  useEffect(() => {
    const syncFromHash = () => {
      const fromHash = window.location.hash.replace('#', '');
      // An empty or unrecognised hash falls back to the default project.
      // Without this, going back to the no-hash entry leaves whichever
      // project was last chosen still selected, which does not match the URL.
      setSelectedId(isKnownId(fromHash) ? fromHash : flagshipProjects[0].id);
    };

    // Listeners first, and unconditionally. Attaching them inside the branch
    // below meant a page opened on a deep link never got them, so changing
    // the hash afterwards did nothing.
    window.addEventListener('popstate', syncFromHash);
    window.addEventListener('hashchange', syncFromHash);
    syncFromHash();

    // The browser jumps to whichever tab the anchor names, which on a narrow
    // screen leaves the other selector above the fold or under the fixed
    // header. Correct it to the top of the group instead.
    //
    // Twice, deliberately: the first pass runs once the browser has done its
    // own anchor scroll, the second catches the layout settling afterwards
    // (hydration, fonts). If the first lands correctly the second is a no-op.
    const timers: number[] = [];
    if (isKnownId(window.location.hash.replace('#', ''))) {
      timers.push(window.setTimeout(revealSelectors, 0));
      timers.push(window.setTimeout(revealSelectors, 180));
    }

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('popstate', syncFromHash);
      window.removeEventListener('hashchange', syncFromHash);
    };
  }, [revealSelectors]);

  const select = useCallback((id: string) => {
    setSelectedId(id);
    // pushState rather than setting location.hash: it keeps back and forward
    // working without the browser jumping the page to the anchor, which is
    // what makes tab switching feel abrupt.
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`);
    }
  }, []);

  // Used by the link at the foot of a panel, where the selectors are out of
  // sight. Selecting from the top of the page does not scroll, because the
  // reader is already looking at the selectors.
  const selectAndReveal = useCallback(
    (id: string) => {
      select(id);
      revealSelectors();
    },
    [select, revealSelectors],
  );

  // Arrow keys move between tabs, which is what a tablist is expected to do.
  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const lastIndex = flagshipProjects.length - 1;
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = lastIndex;
    }

    if (nextIndex === null) return;
    event.preventDefault();
    select(flagshipProjects[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  const selected =
    flagshipProjects.find((project) => project.id === selectedId) ?? flagshipProjects[0];

  return (
    <Box ref={containerRef} scrollMarginTop="90px">
      {/* Selectors. Each carries the project's id so the existing deep links
          still resolve to an element on the page. */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 3, md: 4 }}
        role="tablist"
        aria-label="Featured projects"
      >
        {flagshipProjects.map((project, index) => {
          const isSelected = project.id === selected.id;
          return (
            <Box
              as="button"
              type="button"
              key={project.id}
              id={project.id}
              ref={(element: HTMLButtonElement | null) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelIdFor(project.id)}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => select(project.id)}
              onKeyDown={(event: React.KeyboardEvent) => onKeyDown(event, index)}
              scrollMarginTop="100px"
              textAlign="left"
              p={{ base: 4, md: 5 }}
              rounded="lg"
              borderWidth="1px"
              borderColor={isSelected ? 'blue.400' : 'gray.200'}
              bg={isSelected ? 'blue.50' : 'white'}
              boxShadow={isSelected ? 'inset 0 0 0 1px var(--chakra-colors-blue-400)' : 'none'}
              transition="border-color 0.15s ease, background-color 0.15s ease"
              _hover={{ borderColor: isSelected ? 'blue.400' : 'gray.300' }}
              _focusVisible={{ outline: '2px solid', outlineColor: 'blue.500', outlineOffset: '2px' }}
            >
              <Flex justify="space-between" align="center" gap={2}>
                <Heading as="h3" size="sm" color={isSelected ? 'blue.800' : 'gray.800'}>
                  {project.name}
                </Heading>
                {isSelected && (
                  <Badge
                    bg="blue.100"
                    color="blue.800"
                    rounded="md"
                    px={2}
                    textTransform="none"
                    fontWeight="medium"
                    fontSize="xs"
                    flexShrink={0}
                  >
                    Viewing
                  </Badge>
                )}
              </Flex>
              <Text fontSize="sm" color={isSelected ? 'blue.900' : 'gray.600'} mt={2}>
                {project.tagline}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>

      {/* One panel per project, with the inactive one hidden rather than
          unmounted. Both are then in the served HTML, so a crawler sees both
          case study links instead of only the default project's. */}
      {flagshipProjects.map((project) => (
        <Box
          key={project.id}
          id={panelIdFor(project.id)}
          role="tabpanel"
          aria-labelledby={project.id}
          hidden={project.id !== selected.id}
          tabIndex={-1}
          mt={{ base: 5, md: 6 }}
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          p={{ base: 5, md: 7 }}
          bg="white"
        >
          <Flex justify="space-between" align="flex-start" gap={4} wrap="wrap">
            <Heading as="h3" size="md">
              {project.name}
            </Heading>
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

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 8 }} mt={4}>
            <Box>
              <Text fontSize="sm" color="gray.700">
                <Text as="span" fontWeight="semibold">
                  The problem.
                </Text>{' '}
                {project.problem}
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.700">
                <Text as="span" fontWeight="semibold">
                  What I built.
                </Text>{' '}
                {project.built}
              </Text>
            </Box>
          </SimpleGrid>

          {/* The visual is the main content of the panel, not an illustration
              beside it. */}
          <Box
            mt={6}
            bg="#F8FAFC"
            borderWidth="1px"
            borderColor="gray.200"
            rounded="md"
            p={{ base: 4, md: 5 }}
          >
            {project.showcase.kind === 'shortage' ? (
              <ShortageVisual showcase={project.showcase} />
            ) : (
              <ComparisonVisual showcase={project.showcase} />
            )}
          </Box>

          <Box mt={6}>
            <Text fontSize="xs" fontWeight="semibold" letterSpacing="wide" textTransform="uppercase" color="gray.500">
              A decision worth explaining
            </Text>
            <Text fontSize="sm" fontWeight="semibold" mt={2}>
              {project.decision.title}
            </Text>
            <Text fontSize="sm" color="gray.700" mt={1}>
              {project.decision.body}
            </Text>
          </Box>

          <Flex
            mt={6}
            pt={5}
            borderTopWidth="1px"
            borderColor="gray.100"
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', sm: 'center' }}
            gap={3}
          >
            <Wrap spacing={2}>
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

            <Link
              href={project.repoUrl}
              isExternal
              rel="noopener noreferrer"
              fontSize="sm"
              fontWeight="medium"
              color="blue.600"
              flexShrink={0}
              _hover={{ color: 'blue.700', textDecoration: 'underline' }}
            >
              Read Case Study on GitHub <ExternalLinkIcon mx="2px" mb="2px" aria-hidden="true" />
            </Link>
          </Flex>

          {/* A way back to the selectors from the foot of a long panel. It
              drives the same selection as the tabs, so the hash and the back
              button stay correct. */}
          {otherProject(project.id) && (
            <Box mt={5} pt={4} borderTopWidth="1px" borderColor="gray.100">
              <Box
                as="button"
                type="button"
                onClick={() => selectAndReveal(otherProject(project.id)!.id)}
                fontSize="sm"
                color="gray.600"
                textAlign="left"
                rounded="sm"
                _hover={{ color: 'blue.700', textDecoration: 'underline' }}
                _focusVisible={{
                  outline: '2px solid',
                  outlineColor: 'blue.500',
                  outlineOffset: '2px',
                }}
              >
                Explore the other project: {otherProject(project.id)!.name} &rarr;
              </Box>
            </Box>
          )}
        </Box>
      ))}

    </Box>
  );
}
