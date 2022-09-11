import { Card, CardContainer } from '@components/index';
import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { FaChevronCircleUp } from 'react-icons/fa';
import * as S from './style';
import Loading from '../Loading';

interface MovieList {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
  key: number;
}

interface Infinite {
  api: any,
  unique: string,
}

export default function InfiniteScroll({ api, unique }: Infinite) {
  const scroll = useRef<HTMLDivElement>(null);
  const [up, setUp] = useState(false);

  const scrollControl = () => {
    if (window.pageYOffset > 300) setUp(true);
    else setUp(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollControl);
    return () => window.removeEventListener('scroll', scrollControl);
  }, []);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const { data, error, fetchNextPage } = useInfiniteQuery(
    ['posts', `${unique}`],
    ({ pageParam = 1 }) => api(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.page + 1;
      },
    }
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setTimeout(() => {
          fetchNextPage();
        }, 1500);
      }
    });
  });

  useEffect(() => {
    scroll.current && io.observe(scroll.current);
  }, [data]);

  if (!data) return <S.LoadingBox>loading...</S.LoadingBox>;
  if (error) return <S.LoadingBox>failed to load</S.LoadingBox>;

  const CARD_IMG_URL = 'https://image.tmdb.org/t/p/original';
  const cards = data.pages.map((page) => {
    return page.results.map((movie: MovieList) => {
      return (
        <Card
          key={movie.id}
          id={movie.id}
          imageUrl={`${CARD_IMG_URL}${movie.poster_path}`}
          title={movie.title}
          rate={movie.vote_average}
        />
      );
    });
  });

  const scrollTopBtn = () => {
    if (!up) return null;
    return (
      <S.ScrollTopBtn onClick={goUp}>
        <FaChevronCircleUp />
      </S.ScrollTopBtn>
    );
  };

  return (
    <S.ScrollBox>
      <CardContainer>{cards}</CardContainer>
      <S.LoadingBox ref={scroll}>
        <Loading />
      </S.LoadingBox>
      {scrollTopBtn()}
    </S.ScrollBox>
  );
}
