import theme from '@styles/theme';
import styled from 'styled-components';

export const ScrollTopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 1vw;
  width: 40px;
  height: 40px;
  color: ${theme.colors.MAIN};
  & > svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.RED};
    transition: all 300ms ease-in-out;
  }
`;
