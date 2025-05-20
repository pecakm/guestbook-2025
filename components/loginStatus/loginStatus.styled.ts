import styled from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';
import Link from 'next/link';

import { Color } from '@/enums';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Name = styled.p`
  color: ${Color.White};
  font-weight: 600;
  margin: 0;
`;

export const Button = styled(ButtonMUI)`
  && {
    color: ${Color.White};
    font-weight: 600;
    text-transform: none;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    transition: all 0.2s ease;

    &:hover {
      background: ${Color.WhiteOpacity10};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${Color.White};
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${Color.WhiteOpacity10};
  }
`;
