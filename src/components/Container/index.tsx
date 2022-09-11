import * as S from './style';

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
