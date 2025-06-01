'use client';

import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Box minH="100vh">
      <Navigation />
      {children}
    </Box>
  );
} 