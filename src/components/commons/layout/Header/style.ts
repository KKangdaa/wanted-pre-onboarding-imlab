import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 20px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.SIDE};

  > img {
    cursor: pointer;
    width: auto;
    height: 40px;
    cursor: pointer;
  }
`;

export const Searchbar = styled.form`
  width: 300px;
  height: 35px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.B100};

  input {
    width: 100%;
    caret-color: ${theme.colors.WHITE};
    color: ${theme.colors.WHITE};

    ::placeholder {
      width: 100%;
      height: 100%;
      color: ${theme.colors.B80};
      font-size: ${theme.fontSize.SMALL};
    }
  }
  button {
    margin-left: 8px;
  }
`;
