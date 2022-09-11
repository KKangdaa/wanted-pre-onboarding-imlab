import styled from 'styled-components';

export const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.WHITE};
  width: 35vw;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.SEMI_M};
  margin-bottom: 8px;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  margin-right: 5px;
`;

export const OverView = styled.div`
  margin: 15px 0;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  line-height: 20px;
`;

export const FurtherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;

export const FurtherTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  text-align: left;
  width: 70px;
`;

export const FurtherContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  font-weight: 400;
  text-align: left;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
