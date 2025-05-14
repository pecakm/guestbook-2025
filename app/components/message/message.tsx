'use client';

import { Container } from './message.styled';
import { Props } from './message.types';

export default function Message({ message }: Props) {
  return (
    <Container>
      {message.content}
    </Container>
  );
}
