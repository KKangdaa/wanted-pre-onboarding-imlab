import {
  Card,
  CardContainer,
  Container,
  PageTitle,
  Loading,
} from '@components/index';
import { useLocation } from 'react-router-dom';
import { useInfiQry } from '@hooks/useInfiQry';
import { Fragment } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import * as S from './style';

interface MovieList {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
}

export default function SearchMoviePage() {
  const location = useLocation();
  const { value } = location.state as { value: string };
  const { movies, isLoading, ref } = useInfiQry(value);

  if (isLoading) return <Loading />;
  return (
    <Container>
      <PageTitle title={`'${value}' 검색결과`} />
      <CardContainer>
        {movies?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.results.map((movie: MovieList) => (
              <Card
                key={movie.id}
                id={movie.id}
                imageUrl={
                  'https://image.tmdb.org/t/p/original' + movie.poster_path
                }
                title={movie.title}
                rate={movie.vote_average}
              />
            ))}
          </Fragment>
        ))}
        <button ref={ref} />
        <S.ScrollTopBtn
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        >
          <FaChevronCircleUp />
        </S.ScrollTopBtn>
      </CardContainer>
    </Container>
  );
}
