import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Color, Breakpoint } from '@/enums';

export const Container = styled.header`
  background: ${Color.Gradient1};
  padding: 1rem 0 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${Color.BoxShadow2};
  position: sticky;
  top: 0;
  z-index: 100;

  ${Breakpoint.Tablet} {
    padding: 1.5rem 1rem 1.5rem 2rem;
  }
`;

export const Title = styled(motion.h1)`
  color: ${Color.White};
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px ${Color.BlackOpacity10};
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }

  ${Breakpoint.Tablet} {
    font-size: 1.75rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  ${Breakpoint.Tablet} {
    gap: 1.5rem;
  }
`;
