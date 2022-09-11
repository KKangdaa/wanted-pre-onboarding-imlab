import * as S from './style';
import PeopleIcon from '../../../../assets/svgs/people-icon.svg';

interface DetailMovie {
  title: string;
  genres: [{ id: number; name: string }];
  release_date: string;
  runtime: number;
  rate: number;
  languages: [{ english_name: string; iso_639_1: string; name: string }];
  homepage?: string;
  tagline?: string;
  popularity: number;
}

export default function ExplainContainer({
  title,
  genres,
  release_date,
  runtime,
  rate,
  languages,
  homepage,
  tagline,
  popularity,
}: DetailMovie) {
  return (
    <S.ExplainContainer>
      <S.Title>{title}</S.Title>
      <S.SubTitleContainer>
        {genres.map((genre, index) => (
          <S.SubTitle key={genre.id}>
            {genre.name} {index !== genres.length - 1 ? ',' : ''}
          </S.SubTitle>
        ))}
        <S.SubTitle>• {release_date.split('-')[0]}</S.SubTitle>
      </S.SubTitleContainer>
      <S.OverView>{tagline ? tagline : '-'}</S.OverView>
      <S.FurtherContainer>
        <S.FurtherTitle>Runtime</S.FurtherTitle>
        <S.FurtherContent>{runtime}분</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Released</S.FurtherTitle>
        <S.FurtherContent>
          {release_date.split('-').join('.')}.
        </S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Rating</S.FurtherTitle>
        <S.FurtherContent>
          <span>⭐️ </span>
          {rate}
        </S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Language</S.FurtherTitle>
        <S.FurtherContent>{languages[0].english_name}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Popularity</S.FurtherTitle>
        <S.FurtherContent>
          <img src={PeopleIcon} alt="icon"></img>
          <span> {(popularity * 1000).toLocaleString()}</span>
        </S.FurtherContent>
      </S.FurtherContainer>
      {homepage === '' ? (
        ''
      ) : (
        <S.FurtherContainer>
          <S.FurtherTitle>Hompage</S.FurtherTitle>
          <S.FurtherContent>{homepage}</S.FurtherContent>
        </S.FurtherContainer>
      )}
    </S.ExplainContainer>
  );
}
