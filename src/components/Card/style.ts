import styled from 'styled-components';

export const Card = styled.div`
  &:hover {
    position: relative;
    top: 2px;
  }
`;
export const ImgWrap = styled.div`
  width: 100%;
  aspect-ratio: 1/1.4;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;
export const Poster = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: 5px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.X_SMALL};
`;
export const Rate = styled.div`
  height: 9px;
  font-size: ${({ theme }) => theme.fontSize.X_SMALL};
  color: ${({ theme }) => theme.colors.MAIN};
  font-weight: 400;
  margin-left: 5px;
`;
