import * as S from './style';

interface Title {
  title: string;
}

export default function PageTitle({ title }: Title) {
  return <S.Title>{title}</S.Title>;
}
