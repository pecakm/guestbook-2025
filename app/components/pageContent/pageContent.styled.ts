import styled from 'styled-components';

import { Color } from '@/enums';

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 80px);
  background: ${Color.BgGradient};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
