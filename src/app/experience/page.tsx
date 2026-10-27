'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
// import { VStack, Badge, Divider, SimpleGrid } from '@chakra-ui/react';
import Navigation from '@/components/Navigation';

const experiences = [
  {
    title: 'Senior Product Manager',
    company: 'HelloFresh',
    location: 'Berlin, DE & Arlington, VA',
    period: 'Dec 2024 - Present',
    bullets: [
      'Leading cross-functional initiatives spanning enterprise automation, platform operations, and AI-powered decision support.',
      'Built AI prototypes for supply-chain operations, combining demand forecasts, inventory data, purchase orders, supplier policies, and agentic workflows to detect shortages and recommend mitigation strategies.',
      'Developed intelligent automation capabilities and event-driven integrations that reduced incident and exception response times from 24 hours to under 1 hour.',
    ],
  },
  {
    title: 'Platform Product Manager',
    company: 'Hewlett Packard Enterprise',
    location: 'San Jose, CA',
    period: 'Dec 2020 - Oct 2023',
    bullets: [
      'Owned product strategy and roadmap initiatives for HPE GreenLake, an enterprise hybrid-cloud platform.',
      'Led development of reusable platform capabilities, API-driven integrations, and self-service workflows that helped six business units integrate 60% faster.',
      'Partnered with engineering, design, and platform teams to simplify complex enterprise experiences, reduce implementation time by 40%, and increase daily active usage by 32%.',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Octopi',
    location: 'Miami, FL',
    period: 'July 2018 - July 2020',
    bullets: [
      'Owned product strategy and development for a real-time logistics execution platform deployed across 10+ international customer sites.',
      'Built and enhanced workflows spanning cargo tracking, scheduling, capacity planning, inventory visibility, and operational exception management.',
      'Led API-driven invoicing and reconciliation capabilities that improved billing accuracy and generated $1.2M+ in incremental annual revenue.',
    ],
  },
  {
    title: 'Product Manager / Consultant',
    company: 'Accenture',
    location: 'Arlington, VA',
    period: 'July 2013 - Feb 2018',
    bullets: [
      'Delivered enterprise technology and digital product solutions for clients across healthcare, utilities, energy, and retail.',
      "As a member of Accenture's Cyber Intelligence Platform (ACIP) product team, helped define the MVP, roadmap priorities, analyst workflows, and data requirements, supporting its launch and continued development.",
      'The platform secured 3+ Fortune 500 customers and generated approximately $3M in first-year revenue.',
      'Supported enterprise healthcare technology implementations, including Epic EHR, improving clinical workflows and operational efficiency.',
    ],
  },
];

const skills = [
  {
    category: 'Product Strategy & Leadership',
    items:
      'Product Strategy, 0→1 Product Development, Product Discovery, Roadmapping, Enterprise SaaS, Go-to-Market, Customer Research, Product Analytics, Experimentation, KPI Definition, Cross-Functional Leadership, Stakeholder Management',
  },
  {
    category: 'AI, Agents & Automation',
    items:
      'Python, LangGraph, Claude, AWS Bedrock, LLM Integration, RAG, PostgreSQL/pgvector, Vector Embeddings, n8n, Prompt Engineering, Agentic Workflows, Human-in-the-Loop Systems, AI Workflow Automation',
  },
  {
    category: 'Technical Platforms & Integrations',
    items:
      'REST APIs, Webhooks, JSON, PostgreSQL, AWS Lambda, S3, DynamoDB, Event-Driven Architecture, API Integrations, Cloud Platforms, GitHub, Postman, CI/CD',
  },
  {
    category: 'Product Design & Analytics',
    items:
      'Figma, User Research, Workflow Design, SQL / Data Analysis, Tableau, Amplitude, Adobe Analytics, A/B Testing, Journey Mapping',
  },
  {
    category: 'Industry Expertise',
    items:
      'Supply Chain & Logistics, Enterprise SaaS, Global Trade, Workflow Automation, Healthcare Technology, Retail, Cloud Platforms, Security Operations',
  },
];

export default function Experience() {
  return (
    <Box bg="#F9FAFB" minH="100vh">
      <Navigation />

      <Container maxW="6xl" py={{ base: 8, md: 12 }}>
        <Stack spacing={2}>
          {/* Professional Summary */}
          <Box bg="white" px={8} pt={6} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Professional Summary</Heading>
            <Stack spacing={3} mt={3}>
              <Text>
                Senior Product Manager & AI Builder with 10+ years of experience building enterprise SaaS, logistics, and technology platforms. I&apos;ve led products from discovery and strategy through development, launch, and adoption, delivering measurable improvements in revenue, operational efficiency, and customer experience.
              </Text>
              <Text>
                Today, I combine product leadership with hands-on AI development, building intelligent workflows, agentic systems, and decision-support tools using Python, LangGraph, LLMs, and modern automation technologies. My focus is turning complex business problems into scalable products that deliver real value.
              </Text>
            </Stack>
          </Box>

          {/* Work Experience */}
          <Box bg="white" px={8} pt={2} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Work Experience</Heading>

            <Stack spacing={6} mt={4}>
              {experiences.map((role) => (
                <Box key={role.company}>
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align={{ base: 'flex-start', md: 'flex-start' }}
                    gap={{ base: 1, md: 6 }}
                  >
                    <Box>
                      <Heading as="h3" size="md">{role.title}</Heading>
                      <Text color="gray.600" fontWeight="medium">{role.company}</Text>
                    </Box>
                    <Box textAlign={{ base: 'left', md: 'right' }} flexShrink={0}>
                      <Text color="gray.600">{role.location}</Text>
                      <Text color="gray.600">{role.period}</Text>
                    </Box>
                  </Flex>
                  <UnorderedList mt={2} spacing={2} stylePosition="outside">
                    {role.bullets.map((bullet) => (
                      <ListItem key={bullet}>{bullet}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Skills */}
          <Box bg="white" px={8} pt={2} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Skills</Heading>

            <Stack spacing={4} mt={4}>
              {skills.map((group) => (
                <Box key={group.category}>
                  <Text fontWeight="bold">{group.category}</Text>
                  <Text>{group.items}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
