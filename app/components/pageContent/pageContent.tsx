'use client';

import { Container } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}
