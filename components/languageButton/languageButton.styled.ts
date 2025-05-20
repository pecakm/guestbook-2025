import styled from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';

import { Color } from '@/enums';

export const Container = styled(ButtonMUI)`
  && {
    color: ${Color.White};
    font-size: 1.25rem;
    min-width: 3rem;
    height: 3rem;
    padding: 0;
    border-radius: 0.75rem;
    transition: all 0.2s ease;

    &:hover {
      background: ${Color.WhiteOpacity10};
    }
  }
`;
