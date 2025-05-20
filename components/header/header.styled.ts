import styled from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';
import { motion } from 'framer-motion';

import { Color } from '@/enums';

export const Container = styled.header`
  background: ${Color.Gradient1};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${Color.BoxShadow2};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Title = styled(motion.h1)`
  color: ${Color.White};
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px ${Color.BlackOpacity10};
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
`;

export const Name = styled.p``;

export const Button = styled(ButtonMUI)``;
