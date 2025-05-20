import styled from 'styled-components';
import { TextField, Button as ButtonMUI } from '@mui/material';
import { motion } from 'framer-motion';

import { Color } from '@/enums';

export const Container = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${Color.BoxShadow2}, 0 2px 4px -2px ${Color.BlackOpacity10};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Input = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 0.75rem;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${Color.Primary};
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${Color.Primary};
    }
  }
`;

export const Button = styled(ButtonMUI)`
  && {
    background: ${Color.Gradient1};
    color: ${Color.White};
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    text-transform: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;

    &:hover {
      background: ${Color.Gradient2};
      transform: translateY(-1px);
    }

    &:disabled {
      background: ${Color.GrayLighter};
      color: ${Color.GrayLight};
    }
  }
`;
