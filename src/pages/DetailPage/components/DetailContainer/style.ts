import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  width: calc(100% + 24 * 2);
  margin: 0 -49px 49px -49px;
  padding: 15px 50px;
  flex-direction: row;
  margin-bottom: 30px;
  padding-bottom: 49px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.HOVER};
`;
