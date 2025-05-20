import styled from 'styled-components';

import { Color } from '@/enums';

export const Container = styled.p`
  text-align: center;
  color: ${Color.Primary};
  font-weight: 500;
  padding: 1rem;
  background: ${Color.White};
  border-radius: 8px;
  box-shadow: ${Color.BoxShadow};
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
`;
