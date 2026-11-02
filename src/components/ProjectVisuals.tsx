'use client';

import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import type { ComparisonShowcase, ShortageShowcase } from '@/data/projects';

const formatUnits = (value: number) => value.toLocaleString('en-US');

// Shared caption styling for the line that says where the numbers came from.
function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize="xs" color="gray.500" mt={4}>
      {children}
    </Text>
  );
}

/**
 * The shortage scenario, drawn to scale.
 *
 * The top bar is demand. The filled part is what will actually be available,
 * and the gap is the shortage — so the size of the problem is visible before
 * any number is read. The options below are drawn against the shortage rather
 * than against demand, because that is the gap they are closing.
 */
export function ShortageVisual({ showcase }: { showcase: ShortageShowcase }) {
  const { demand, available, shortage, options, unit, caption } = showcase;
  const availablePercent = (available / demand) * 100;
  const covered = options.reduce((total, option) => total + option.units, 0);

  return (
    <Box>
      <Flex justify="space-between" align="baseline" gap={4} wrap="wrap">
        <Text fontSize="sm" fontWeight="semibold" color="gray.700">
          One day&apos;s demand at one site
        </Text>
      </Flex>

      {/* Demand bar: available vs the gap. */}
      <Flex
        mt={3}
        h="34px"
        rounded="md"
        overflow="hidden"
        borderWidth="1px"
        borderColor="gray.200"
        role="img"
        aria-label={`Demand ${formatUnits(demand)} ${unit}. Available ${formatUnits(
          available,
        )}. Short by ${formatUnits(shortage)}.`}
      >
        <Flex
          bg="blue.500"
          flexBasis={`${availablePercent}%`}
          align="center"
          px={3}
          flexShrink={0}
        >
          <Text fontSize="xs" fontWeight="semibold" color="white" noOfLines={1}>
            {formatUnits(available)} available
          </Text>
        </Flex>
        <Flex bg="orange.400" flex="1" align="center" justify="center" px={2}>
          <Text fontSize="xs" fontWeight="semibold" color="white" noOfLines={1}>
            {formatUnits(shortage)} short
          </Text>
        </Flex>
      </Flex>

      <Flex mt={2} justify="space-between" fontSize="xs" color="gray.600" wrap="wrap" gap={2}>
        <Text>
          Demand <strong>{formatUnits(demand)}</strong> {unit}
        </Text>
        <Text>
          Available including deliveries that arrive in time{' '}
          <strong>{formatUnits(available)}</strong>
        </Text>
      </Flex>

      {/* The validated options, drawn against the shortage. */}
      <Box mt={6}>
        <Text fontSize="sm" fontWeight="semibold" color="gray.700">
          Four options, after the rules checked them
        </Text>

        <Stack spacing={2.5} mt={3}>
          {options.map((option) => (
            <Flex key={option.label} align="center" gap={3}>
              <Text fontSize="sm" color="gray.700" flexBasis={{ base: '46%', sm: '40%' }} flexShrink={0}>
                {option.label}
              </Text>
              <Flex flex="1" align="center" gap={2} minW={0}>
                <Box
                  h="10px"
                  rounded="sm"
                  bg="blue.400"
                  flexBasis={`${(option.units / shortage) * 100}%`}
                  flexShrink={0}
                  aria-hidden="true"
                />
                <Text fontSize="xs" color="gray.600" flexShrink={0}>
                  {formatUnits(option.units)}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Stack>

        <Flex
          mt={3}
          pt={3}
          borderTopWidth="1px"
          borderColor="gray.200"
          justify="space-between"
          fontSize="sm"
        >
          <Text color="gray.700" fontWeight="medium">
            Potential coverage if approved
          </Text>
          <Text color="gray.700" fontWeight="semibold">
            {formatUnits(covered)} of {formatUnits(shortage)} {unit}
          </Text>
        </Flex>
      </Box>

      <SourceNote>{caption}</SourceNote>
    </Box>
  );
}

/**
 * Two runs of the same batch, side by side.
 *
 * The dots are the delivery promises: filled means kept. Showing them this way
 * makes the one-promise difference visible, which a pair of numbers does not.
 */
export function ComparisonVisual({ showcase }: { showcase: ComparisonShowcase }) {
  const { rows, takeaway, caption } = showcase;
  const best = Math.max(...rows.map((row) => row.kept));

  return (
    <Box>
      <Flex justify="space-between" align="baseline" gap={4} wrap="wrap">
        <Text fontSize="sm" fontWeight="semibold" color="gray.700">
          The same batch, routed two ways
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 3, md: 4 }} mt={3}>
        {rows.map((row) => {
          const isBest = row.kept === best;
          return (
            <Box
              key={row.label}
              borderWidth="1px"
              borderColor={isBest ? 'blue.300' : 'gray.200'}
              bg={isBest ? 'blue.50' : 'white'}
              rounded="md"
              p={4}
            >
              <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                {row.label}
              </Text>
              <Text fontSize="xs" color="gray.600" mt={1}>
                {row.note}
              </Text>

              <Flex
                gap={1.5}
                mt={4}
                role="img"
                aria-label={`${row.kept} of ${row.total} delivery promises kept`}
              >
                {Array.from({ length: row.total }).map((_, index) => (
                  <Box
                    key={index}
                    boxSize="11px"
                    rounded="full"
                    bg={index < row.kept ? 'blue.500' : 'transparent'}
                    borderWidth="1px"
                    borderColor={index < row.kept ? 'blue.500' : 'gray.300'}
                    aria-hidden="true"
                  />
                ))}
              </Flex>

              <Text fontSize="sm" color="gray.800" mt={3}>
                <strong>
                  {row.kept} of {row.total}
                </strong>{' '}
                delivery promises kept
              </Text>
              <Text fontSize="sm" color="gray.600">
                {row.cost} shipping cost
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>

      <Text fontSize="sm" color="gray.700" mt={4}>
        {takeaway}
      </Text>

      <SourceNote>{caption}</SourceNote>
    </Box>
  );
}
