'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';
// import { VStack, Badge, Divider, SimpleGrid } from '@chakra-ui/react';
import Navigation from '@/components/Navigation';

export default function Experience() {
  return (
    <Box bg="#F9FAFB" minH="100vh">
      <Navigation />
      
      <Container maxW="6xl" py={{ base: 8, md: 12 }}>
        <Stack spacing={2}>
          {/* Professional Summary */}
          <Box bg="white" px={8} pt={6} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Professional Summary</Heading>
            <Text>
              Accomplished Product Leader with expertise in delivering data-driven solutions within high-impact environments. Renowned for turning ambiguity into clear, actionable strategy, I drive large-scale automation and align cross-functional teams to achieve business-critical outcomes. Skilled in translating complex requirements into robust product roadmaps, consistently delivering measurable results across industries including tech, logistics, retail, and healthcare.
            </Text>
          </Box>

          {/* Work Experience */}
          <Box bg="white" px={8} pt={2} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Work Experience</Heading>
            
            <Stack spacing={6} mt={4}>
              {/* HelloFresh */}
              <Box>
                <HStack justify="space-between" align="top">
                  <Box>
                    <Heading as="h3" size="md">Product</Heading>
                    <Text color="gray.600" fontWeight="medium">HelloFresh</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">Berlin, DE</Text>
                    <Text color="gray.600">Dec 2022-Present</Text>
                  </Box>
                </HStack>
                <Text>
                  Leading automation and incident response initiatives across security and infrastructure, with a focus on operational efficiency, KPI tracking, and vendor management.
                </Text>
              </Box>

              {/* HPE */}
              <Box>
                <HStack justify="space-between" align="top">
                  <Box>
                    <Heading as="h3" size="md">Platform Product Manager</Heading>
                    <Text color="gray.600" fontWeight="medium">Hewlett Packard Enterprise</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">San Jose, CA</Text>
                    <Text color="gray.600">Dec 2022-Present</Text>
                  </Box>
                </HStack>
                <Text>
                  Led cross-functional teams focused on user experience and front-end architecture for GreenLake Central, HPE's flagship hybrid cloud platform. Collaborated with designers, UI developers, and system architects to deliver scalable design systems and intuitive user flows.
                </Text>
              </Box>

              {/* Truss Works */}
              <Box>
                <HStack justify="space-between" align="top">
                  <Box>
                    <Heading as="h3" size="md">Senior Product Manager</Heading>
                    <Text color="gray.600" fontWeight="medium">Truss Works</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">San Jose, CA</Text>
                    <Text color="gray.600">July 2021- Dec 2022</Text>
                  </Box>
                </HStack>
                <Text>
                  Led strategic product initiatives for U.S. government clients, including audit capabilities and cloud infrastructure modernization.
                </Text>
              </Box>

              {/* Octopi */}
              <Box>
                <HStack justify="space-between" align="top">
                  <Box>
                    <Heading as="h3" size="md">Product Manager</Heading>
                    <Text color="gray.600" fontWeight="medium">Octopi</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">Miami, FL</Text>
                    <Text color="gray.600">July 2018 - July 2021</Text>
                  </Box>
                </HStack>
                <Text>
                  Contributed to the evolution of logistics workflows used by global port operators across 10+ regions. Drove product enhancements in yard planning, inventory visibility, invoicing, customs workflows, and cargo tracking improving throughput and operational efficiency. 
                </Text>
              </Box>

              {/* Accenture */}
              <Box>
                <HStack justify="space-between" align="top">
                  <Box>
                    <Heading as="h3" size="md">Product Manager / Consultant</Heading>
                    <Text color="gray.600" fontWeight="medium">Accenture</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">Arlington, VA</Text>
                    <Text color="gray.600">July 2013 - Feb 2018</Text>
                  </Box>
                </HStack>
                <Text>
                  Supported the launch for Accenture's Cyber Intelligence Platform (ACIP). Delivered product, operations, and data solutions across healthcare, retail, and energy clients helping drive measurable outcomes in patient care, operational performance, and business efficiency. 
                </Text>
              </Box>
            </Stack>
          </Box>

          {/* Skills */}
          <Box bg="white" px={8} pt={2} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Skills</Heading>
            
            <Stack spacing={4} mt={4}>
              <Box>
                <Text fontWeight="bold">Product Strategy & Leadership</Text>
                <Text>Product Visioning, Roadmapping, Go-To-Market Strategy, Product Lifecycle Management, OKRs & KPI Definition, Prioritization Frameworks (RICE, MoSCoW), Business Case Development, Executive Communication, Stakeholder Alignment, Change Management, Decision Framing, Risk Mitigation</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">AI, Automation & Data</Text>
                <Text>LLM Integration (AWS Bedrock), Prompt Engineering, Workflow & Incident Automation, Intelligent Triage & Alerting, Data-Driven Decision Making, Experiment Design, A/B Testing, Hypothesis-Driven Development</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Cloud & Platform Technologies</Text>
                <Text>AWS (S3, DynamoDB, Lambda, CloudFront, Bedrock), GCP (basic), Azure (basic), REST APIs, API Design, OAuth2, SSO, IAM, Terraform (familiarity), Kubernetes, Docker, Microservices, Event-Driven Architecture, Security Automation, DevOps Awareness</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Tools & Developer Platforms</Text>
                <Text>Jira, GitHub, GitLab, Postman, Notion, Aha, Epic, Confluence, Slack API, LaunchDarkly (Feature Flags), CI/CD Pipelines, Segment, Cursor, Wiz, Nessus, Datadog, Grafana, Salesforce, Zendesk, Dynamics365</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Design, Analytics & Visualization</Text>
                <Text>Figma, Miro, Lucidchart, Adobe Analytics, Adobe Experience Manager, Adobe Target, Tableau, Looker, Amplitude, FullStory, UX/UI, Customer Journey Mapping, Product Analytics</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Industry Experience</Text>
                <Text>Tech, Supply Chain & Logistics, Global Trade, Healthcare, Retail, Utilities, Infrastructure, Security & IAM, Vulnerability Management, AI-Enabled Operations</Text>
              </Box>
            </Stack>
          </Box>

          {/* Education */}
          <Box bg="white" px={8} pt={2} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Education</Heading>
            
            <Box mt={4}>
              <HStack justify="space-between" align="top">
                <Box>
                  <Heading as="h3" size="md">Bachelor of Science in Information Technology (IT)</Heading>
                  <Text color="gray.600" fontWeight="medium">George Mason University</Text>
                </Box>
                <Box>
                  <Text color="gray.600">Fairfax, VA</Text>
                  <Text color="gray.600">Sept 2009 – May 2013</Text>
                </Box>
              </HStack>
            </Box>
          </Box>

          {/* Certifications */}
          <Box bg="white" px={8} pt={2} pb={4} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg">Certifications</Heading>
            
            <List mt={4}>
              <ListItem>• Certified Scrum Product Owner</ListItem>
              <ListItem>• Skiplevel Technical Product Manager Certification</ListItem>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
} 