import styled from 'styled-components';

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
