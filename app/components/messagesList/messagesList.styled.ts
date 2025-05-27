import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Color } from '@/enums';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  color: ${Color.Text};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 0.5rem;
    height: 1.5rem;
    background: ${Color.Gradient1ToBottom};
    border-radius: 0.25rem;
  }
`;

export const Loading = styled.p`
  color: ${Color.Gray};
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
  background: ${Color.White};
  border-radius: 1rem;
  box-shadow: ${Color.BoxShadow};
`;

export const Error = styled.p`
  color: ${Color.Error};
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
  background: ${Color.ErrorBg};
  border-radius: 1rem;
  box-shadow: ${Color.BoxShadow};
`;
