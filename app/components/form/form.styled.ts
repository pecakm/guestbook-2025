import styled from 'styled-components';
import { TextField, Button as ButtonMUI, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { Breakpoint, Color } from '@/enums';

export const WelcomeMessage = styled(Typography)`
  color: ${Color.Text};
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: ${Color.Gradient1ToBottom};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled.span`
  display: block;
  font-size: 1.1rem;
  color: ${Color.Gray};
`;

export const Container = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${Color.BoxShadow2}, 0 2px 4px -2px ${Color.BlackOpacity10};
  transition: transform 0.2s ease;

  ${Breakpoint.Tablet} {
    padding: 2rem;
  }

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
