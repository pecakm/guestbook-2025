import styled from 'styled-components';
import NextLink from 'next/link';

import { Color, Breakpoint } from '@/enums';

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  min-height: calc(100vh - 80px);
  background: ${Color.BgGradient};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Breakpoint.Tablet} {
    padding: 2rem;
    gap: 2rem;
  }
`;

export const Link = styled(NextLink)`
  color: ${Color.Primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Text = styled.p`
  text-align: center;
  color: ${Color.Text};
  margin-top: 1rem;

  a {
    margin-left: 0.5rem;
  }
`;
