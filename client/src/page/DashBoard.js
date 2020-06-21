import React from 'react';
import { Container, Title } from '../components/shared';
import { Box, Text } from '../components/dashboard';

export default function DashBoard() {
  return (
    <Container>
      <Title>API KEY</Title>
      <Box>1EEA6DC-JAM4DP2-PHVYPBN-V0XCJ9X</Box>
      <Text>Limit:00 / 500 per day</Text>
      <Title>Example</Title>
      <Box>htttp://yourdomain/apikey=...</Box>
      <Text>
        You can make <mark>GET</mark> to this url.
      </Text>
    </Container>
  );
}
