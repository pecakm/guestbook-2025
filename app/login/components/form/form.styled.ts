import styled from 'styled-components';
import { TextField, Button as ButtonMUI } from '@mui/material';

import { Color, Breakpoint } from '@/enums';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: ${Color.White};
  border-radius: 8px;
  box-shadow: ${Color.BoxShadow};

  ${Breakpoint.Tablet} {
    padding: 3rem;
  }
`;

export const Input = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${Color.Primary};
    }
    &.Mui-focused fieldset {
      border-color: ${Color.Primary};
    }
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${Color.Primary};
  }
`;

export const Button = styled(ButtonMUI)`
  width: 100%;
  margin-top: 1rem;
  background-color: ${Color.Primary};
  color: ${Color.White};
  text-transform: none;
  font-size: 1rem;
  padding: 0.75rem;

  &:hover {
    background-color: ${Color.Accent};
    color: ${Color.White};
  }
`;

export const ErrorText = styled.p`
  color: ${Color.Error};
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
`;
