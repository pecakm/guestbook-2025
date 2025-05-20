'use client';

import { Container, Content, Name } from './message.styled';
import { Props } from './message.types';
import { containerVariants } from './message.variants';

export default function Message({ message }: Props) {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
    >
      <Content>{message.content}</Content>
      <Name>{message.user?.nickname || `~${message.name}`}</Name>
    </Container>
  );
}
