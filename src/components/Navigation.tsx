'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Box,
  Container,
  Flex,
  Stack,
  IconButton,
  Text,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navigation = () => {
  const pathname = usePathname();
  const { isOpen, onToggle } = useDisclosure();
  
  const isActive = (path: string) => pathname === path;
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Books', path: '/books' },
    { name: 'Travel', path: '/travel' },
  ];

  return (
    <Box 
      as="header" 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      bg="white" 
      borderBottomWidth="1px"
      borderColor="gray.100"
      zIndex={50}
    >
      <Container maxW="4xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link href="/" passHref>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="gray.900"
              _hover={{ color: 'gray.700' }}
              cursor="pointer"
            >
              Ali Rehman
            </Text>
          </Link>
          
          <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <Text
                  px={3}
                  py={2}
                  rounded="md"
                  fontSize="sm"
                  fontWeight="medium"
                  color={isActive(item.path) ? 'blue.600' : 'gray.600'}
                  bg={isActive(item.path) ? 'blue.50' : 'transparent'}
                  _hover={{
                    color: isActive(item.path) ? 'blue.600' : 'gray.900',
                    bg: isActive(item.path) ? 'blue.50' : 'gray.50',
                  }}
                  cursor="pointer"
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </Stack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            aria-label="Toggle navigation"
            variant="ghost"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size="md"
          />
        </Flex>

        <Collapse in={isOpen}>
          <Stack spacing={2} mt={4} display={{ base: 'flex', md: 'none' }}>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <Text
                  px={3}
                  py={2}
                  rounded="md"
                  fontSize="sm"
                  fontWeight="medium"
                  color={isActive(item.path) ? 'blue.600' : 'gray.600'}
                  bg={isActive(item.path) ? 'blue.50' : 'transparent'}
                  _hover={{
                    color: isActive(item.path) ? 'blue.600' : 'gray.900',
                    bg: isActive(item.path) ? 'blue.50' : 'gray.50',
                  }}
                  cursor="pointer"
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navigation; 