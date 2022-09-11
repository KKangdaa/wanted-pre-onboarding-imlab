import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid ${theme.colors.B80};
  padding: 50px;

  img {
    width: auto;
    height: 40px;
    margin-bottom: 30px;
  }
`;

export const Wrap = styled.div`
  span {
    display: inline-block;
    color: ${theme.colors.B40};
    margin-right: 12px;
    margin-bottom: 15px;
    font-size: ${theme.fontSize.SMALL};
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  p {
    color: ${theme.colors.B40};
    font-size: ${theme.fontSize.SMALL};
  }
`;
