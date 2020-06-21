import React from 'react';
import { Title, Image, RedirectLink } from '../components/notfound';
import { Container } from '../components/shared';
export default function NotFound() {
  return (
    <Container>
      <Title>Page Not Found</Title>
      <Image src="assets/404.png" alt="page not found" />
      <RedirectLink href="/">Go Back</RedirectLink>
    </Container>
  );
}
