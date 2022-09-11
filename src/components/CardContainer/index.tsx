import * as S from './style';

type Props = {
  children: React.ReactNode;
};

export default function CardContainer({ children }: Props) {
  return <S.CardContainer>{children}</S.CardContainer>;
}
