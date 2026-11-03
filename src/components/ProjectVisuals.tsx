'use client';

import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import type { ComparisonShowcase, PipelineShowcase, ShortageShowcase } from '@/data/projects';

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

// How each kind of stage is drawn. The whole point of the visual is that some
// steps are a language model and some are ordinary code, so that distinction
// carries the colour rather than being written out in a sentence.
const STAGE_STYLES: Record<
  PipelineShowcase['stages'][number]['role'],
  { bg: string; border: string; label: string; labelColor: string }
> = {
  input: { bg: 'gray.50', border: 'gray.300', label: 'In', labelColor: 'gray.600' },
  code: { bg: 'blue.50', border: 'blue.300', label: 'Code', labelColor: 'blue.700' },
  ai: { bg: 'purple.50', border: 'purple.300', label: 'AI', labelColor: 'purple.700' },
  output: { bg: 'gray.50', border: 'gray.300', label: 'Out', labelColor: 'gray.600' },
};

/**
 * The eight stages of the support workflow, in order.
 *
 * Drawn from the pipeline published in the project's repository rather than
 * embedding that diagram as an image: the published SVG is sized for a full
 * page and its labels are unreadable once scaled into this panel. The stages,
 * their order and their wording are the same.
 */
export function PipelineVisual({ showcase }: { showcase: PipelineShowcase }) {
  const { stages, enforces, enforcesNote, caption } = showcase;

  return (
    <Box>
      <Flex justify="space-between" align="baseline" gap={4} wrap="wrap">
        <Text fontSize="sm" fontWeight="semibold" color="gray.700">
          One ticket, eight stages
        </Text>
        <Flex gap={3} align="center">
          <Flex align="center" gap={1.5}>
            <Box boxSize="9px" rounded="sm" bg="blue.100" borderWidth="1px" borderColor="blue.300" aria-hidden="true" />
            <Text fontSize="xs" color="gray.600">
              code
            </Text>
          </Flex>
          <Flex align="center" gap={1.5}>
            <Box boxSize="9px" rounded="sm" bg="purple.100" borderWidth="1px" borderColor="purple.300" aria-hidden="true" />
            <Text fontSize="xs" color="gray.600">
              AI
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 2, md: 2.5 }} mt={3}>
        {stages.map((stage) => {
          const style = STAGE_STYLES[stage.role];
          return (
            <Box
              key={stage.step}
              bg={style.bg}
              borderWidth="1px"
              borderColor={style.border}
              rounded="md"
              px={3}
              py={2.5}
            >
              <Flex justify="space-between" align="center" gap={2}>
                <Text fontSize="xs" color="gray.500" fontWeight="semibold">
                  {stage.step}
                </Text>
                <Text fontSize="10px" fontWeight="bold" letterSpacing="wide" color={style.labelColor}>
                  {style.label.toUpperCase()}
                </Text>
              </Flex>
              <Text fontSize="sm" fontWeight="medium" color="gray.800" mt="2px" lineHeight="1.3">
                {stage.name}
              </Text>
              <Text fontSize="xs" color="gray.600" mt={1} lineHeight="1.35">
                {stage.note}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>

      {/* The guardrail stage is the one worth spelling out, because it is the
          part that does not depend on the model behaving. The note underneath
          keeps that claim honest: these are checks for recognized patterns,
          not a guarantee that every phrasing is caught. */}
      <Box mt={5} pt={4} borderTopWidth="1px" borderColor="gray.200">
        <Text fontSize="sm" fontWeight="semibold" color="gray.700">
          How deterministic rules keep recommendations safe
        </Text>
        <Stack spacing={2} mt={3}>
          {enforces.map((rule) => (
            <Flex key={rule} align="flex-start" gap={2.5}>
              <Box
                mt="7px"
                boxSize="5px"
                rounded="full"
                bg="blue.400"
                flexShrink={0}
                aria-hidden="true"
              />
              <Text fontSize="sm" color="gray.700" lineHeight="1.45">
                {rule}
              </Text>
            </Flex>
          ))}
        </Stack>

        <Text fontSize="xs" color="gray.600" mt={3} lineHeight="1.5">
          {enforcesNote}
        </Text>
      </Box>

      <SourceNote>{caption}</SourceNote>
    </Box>
  );
}
