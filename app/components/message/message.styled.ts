import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Color } from '@/enums';

export const Container = styled(motion.div)`
  background: ${Color.White};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: ${Color.BoxShadow};
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.25rem;
    height: 100%;
    background: ${Color.Gradient1ToBottom};
  }
`;

export const Content = styled.p`
  color: ${Color.Text};
  font-size: 1.125rem;
  line-height: 1.75;
  margin: 0 0 1rem 0;
`;

export const Name = styled.p`
  color: ${Color.Gray};
  font-size: 0.875rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '~';
    color: ${Color.Gray};
  }
`;
