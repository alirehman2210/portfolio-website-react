import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Badge,
  Divider,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';
import Navigation from '@/components/Navigation';

export default function Experience() {
  return (
    <Box bg="#F9FAFB" minH="100vh">
      <Navigation />
      
      <Container maxW="6xl" py={{ base: 8, md: 12 }}>
        <Stack spacing={8}>
          {/* Professional Summary */}
          <Box bg="white" p={8} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg" mb={4}>Professional Summary</Heading>
            <Text>
              Strategic Product Manager with 6+ years of experience driving data-driven solutions across complex technical environments. 
              Demonstrated expertise in automation, cross-functional collaboration, and analytical problem-solving. 
              Proven track record of translating ambiguous business requirements into actionable product roadmaps, 
              with experience in security optimization, resource allocation, and system integration.
            </Text>
          </Box>

          {/* Work Experience */}
          <Box bg="white" p={8} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg" mb={6}>Work Experience</Heading>
            
            <Stack spacing={8}>
              {/* HelloFresh */}
              <Box>
                <HStack justify="space-between" align="top" mb={2}>
                  <Box>
                    <Heading as="h3" size="md">Product</Heading>
                    <Text color="gray.600" fontWeight="medium">Hello Fresh</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">Berlin, DE</Text>
                    <Text color="gray.600">Dec 2022-Present</Text>
                  </Box>
                </HStack>
                <List spacing={2}>
                  <ListItem>• Led end-to-end resource optimization and automation initiatives, including vendor evaluation and selection for critical infrastructure, reducing response time by 40% through data-driven monitoring and automated intervention protocols.</ListItem>
                  <ListItem>• Enhanced operational capacity planning by refining alert logic and establishing quantifiable KPIs, resulting in 25% reduction in false positives and improved resource allocation efficiency.</ListItem>
                  <ListItem>• Collaborated with cross-functional engineering teams to implement adaptive rules for high-traffic systems, enabling optimal performance during peak usage without compromising security or user experience.</ListItem>
                  <ListItem>• Designed and implemented data-driven workflows for incident management, reducing SLAs and automating post-incident analysis to drive continuous improvement in system performance.</ListItem>
                  <ListItem>• Partnered with multiple business units to analyze system vulnerabilities, prioritize technical solutions, and execute implementation plans aligned with organizational objectives.</ListItem>
                </List>
              </Box>

              {/* HPE */}
              <Box>
                <HStack justify="space-between" align="top" mb={2}>
                  <Box>
                    <Heading as="h3" size="md">Platform Product Manager</Heading>
                    <Text color="gray.600" fontWeight="medium">Hewlett Packard Enterprise</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">San Jose, CA</Text>
                    <Text color="gray.600">Dec 2022-Present</Text>
                  </Box>
                </HStack>
                <List spacing={2}>
                  <ListItem>• Spearheaded platform standardization initiative using enterprise-grade UI framework, resulting in 35% improvement in user satisfaction through consistent, intuitive interface design.</ListItem>
                  <ListItem>• Led cross-functional teams to define and execute product roadmap for global platform adoption, successfully localizing support documentation into 10 languages and optimizing integration capabilities.</ListItem>
                  <ListItem>• Implemented data-driven design improvements for complex information display, developing standardized table designs and pagination systems that balanced usability with performance requirements.</ListItem>
                  <ListItem>• Championed agile methodologies to prioritize feature backlogs, reducing release cycles by 20% through iterative testing and stakeholder feedback loops, ensuring alignment with business objectives.</ListItem>
                  <ListItem>• Facilitated stakeholder collaboration between technical teams and business units, translating complex requirements into actionable product specifications and measurable outcomes.</ListItem>
                </List>
              </Box>

              {/* Truss Works */}
              <Box>
                <HStack justify="space-between" align="top" mb={2}>
                  <Box>
                    <Heading as="h3" size="md">Senior Product Manager</Heading>
                    <Text color="gray.600" fontWeight="medium">Truss Works</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">San Jose, CA</Text>
                    <Text color="gray.600">July 2021- Dec 2022</Text>
                  </Box>
                </HStack>
                <List spacing={2}>
                  <ListItem>• Owned product strategy and roadmap for a logistics platform managing 430K+ annual moves, representing 15% of all moves performed in the U.S., requiring deep understanding of complex operational constraints and resource allocation.</ListItem>
                  <ListItem>• Led data warehouse integration project from conception to implementation, establishing automated replication processes between systems and ensuring data integrity for mission-critical operations.</ListItem>
                  <ListItem>• Conducted extensive user research (100+ interviews, 20 site visits) to identify operational inefficiencies and translate findings into product enhancements that reduced task completion time by 25%.</ListItem>
                  <ListItem>• Collaborated with security teams to align technical implementations with strict compliance standards, successfully achieving Authority to Operate (ATO) certification within regulatory timeframes.</ListItem>
                  <ListItem>• Designed and implemented comprehensive audit logging solution, enabling accurate tracking and analysis of system activities while maintaining security standards and documentation protocols.</ListItem>
                </List>
              </Box>

              {/* Octopi */}
              <Box>
                <HStack justify="space-between" align="top" mb={2}>
                  <Box>
                    <Heading as="h3" size="md">Product Manager</Heading>
                    <Text color="gray.600" fontWeight="medium">Octopi</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">Miami, FL</Text>
                    <Text color="gray.600">July 2018 - July 2021</Text>
                  </Box>
                </HStack>
                <List spacing={2}>
                  <ListItem>• Led product strategy for port and terminal management software with specialized focus on warehouse management capabilities, optimizing resource allocation and capacity planning for global logistics operations.</ListItem>
                  <ListItem>• Developed and implemented automated inventory tracking and features that optimized warehouse capacity planning, resulting in 50% reduction in transaction processing time and improved resource allocation.</ListItem>
                  <ListItem>• Spearheaded product expansion into 10 international markets, analyzing regional warehouse management requirements and implementing technical solutions to accommodate diverse operational constraints and capacity needs.</ListItem>
                  <ListItem>• Designed analytics dashboards for real-time vessel operation monitoring, enabling terminal operators to make data-driven decisions about resource allocation and operational efficiency during peak periods.</ListItem>
                  <ListItem>• Orchestrated the implementation of API-driven automation for warehouse inventory management, enhancing visibility into available capacity and enabling dynamic resource allocation based on changing demand patterns.</ListItem>
                  <ListItem>• Collaborated with engineering teams to optimize system performance during high-volume periods, ensuring 99.8% uptime for critical port and warehouse management functionalities during peak operations.</ListItem>
                  <ListItem>• Mentored junior product managers on metrics-driven decision making, establishing KPI frameworks that balanced operational efficiency with optimal resource utilization across warehouse management modules.</ListItem>
                </List>
              </Box>

              {/* Accenture */}
              <Box>
                <HStack justify="space-between" align="top" mb={2}>
                  <Box>
                    <Heading as="h3" size="md">Product Manager / Consultant</Heading>
                    <Text color="gray.600" fontWeight="medium">Accenture</Text>
                  </Box>
                  <Box>
                    <Text color="gray.600">Arlington, VA</Text>
                    <Text color="gray.600">July 2013 - Feb 2018</Text>
                  </Box>
                </HStack>
                <List spacing={2}>
                  <ListItem>• Managed the product backlog for the Accenture Cyber Intelligence Platform (ACIP), the company's first integrated security solution combining AI, cloud, and analytics. Improved backlog prioritization efficiency by 30%, enabling faster feature rollouts and reducing time to market by 15%.</ListItem>
                  <ListItem>• Enhanced vulnerability detection rates by 25% and contributed to a 20% improvement in security posture by analyzing internal and external security data using tools such as Retina and Nessus.</ListItem>
                  <ListItem>• Conducted market analysis across several verticals to identify launch opportunities, collaborating with leadership to define the go-to-market strategy for ACIP.</ListItem>
                  <ListItem>• Designed database schema on AWS DynamoDB for Test Drive Campaigns for a retail client, enhancing data organization and retrieval.</ListItem>
                  <ListItem>• Partnered with executive leadership at Harvard Medical School's teaching hospital to deliver guidance on operational models and implementation strategies, improving efficiency and patient care.</ListItem>
                  <ListItem>• Conducted root cause analysis and implemented process improvements for an American retail manufacturer of prestige skincare, reducing operational inefficiencies and streamlining workflows.</ListItem>
                  <ListItem>• Streamlined healthcare processes at a community hospital, resulting in improved patient care through operational enhancements based on deep data analysis and process improvement strategies.</ListItem>
                  <ListItem>• Acted as Scrum Master, facilitating daily sprint meetings and managing sprint backlogs to ensure the successful delivery of prioritized features by cross-functional teams.</ListItem>
                </List>
              </Box>
            </Stack>
          </Box>

          {/* Skills */}
          <Box bg="white" p={8} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg" mb={6}>Skills</Heading>
            
            <Stack spacing={4}>
              <Box>
                <Text fontWeight="bold" mb={2}>Product Management:</Text>
                <Text>Agile, Kanban, Scrum, A/B Testing, Requirements Gathering, User Research, Backlog Grooming, Product Roadmap, Product Release, Go-To-Market, Metrics</Text>
              </Box>
              
              <Box>
                <Text fontWeight="bold" mb={2}>AI Skills:</Text>
                <Text>AI For Everyone, University of Pennsylvania AI for Business Specialization</Text>
              </Box>
              
              <Box>
                <Text fontWeight="bold" mb={2}>Tools:</Text>
                <Text>Jira, Postman, GitHub, Asana, Tableau, Salesforce, Zendesk, Dynamics365, Google, Miro, Figma, Confluence, GitLab, CI/CD, Lucid, Aha, Epic, Notion, Adobe Analytics, Adobe Experience Manager, Adobe Target</Text>
              </Box>
              
              <Box>
                <Text fontWeight="bold" mb={2}>Technologies:</Text>
                <Text>PostgreSQL, Amazon CloudFront, Looker, Amazon S3, Amplitude, Amazon DynamoDB, REST API's, API Design, JavaScript, XML, HTML, CSS, Full Story, Nessus, UX/UI, YAML, Segment</Text>
              </Box>
              
              <Box>
                <Text fontWeight="bold" mb={2}>Industry Experience:</Text>
                <Text>Supply Chain, Global Trade, International Trade, Export, Import, Healthcare, Retail, Utility, Security, Vulnerability Management</Text>
              </Box>
            </Stack>
          </Box>

          {/* Education */}
          <Box bg="white" p={8} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg" mb={6}>Education</Heading>
            
            <Box>
              <HStack justify="space-between" align="top" mb={2}>
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
          <Box bg="white" p={8} rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
            <Heading as="h2" size="lg" mb={6}>Certifications</Heading>
            
            <List spacing={2}>
              <ListItem>• CompTIA Security+</ListItem>
              <ListItem>• Certified Scrum Product Owner</ListItem>
              <ListItem>• Skiplevel Technical Product Manager Certification</ListItem>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
} 