'use client';

import { Container, Content, Name } from './message.styled';
import { Props } from './message.types';

export default function Message({ message }: Props) {
  return (
    <Container>
      <Content>{message.content}</Content>
      <Name>{message.userId || `~${message.name}`}</Name>
    </Container>
  );
}
