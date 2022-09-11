import styled from 'styled-components';

export const NoMovieComment = styled.div`
  font-size: ${({ theme }) => theme.fontSize.TITLE};
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-top: 30px;
`;

export const OverViewText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 20px;
`;
