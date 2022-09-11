import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { getSearch } from '@apis/index';
import { useLocation } from 'react-router-dom';

export const useInfiQry = (
  queryString?: string,
  queryFn?: (pageNum: number) => Promise<any>
) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const location = useLocation();

  const {
    data: movies,
    fetchNextPage: nextPage,
    hasNextPage: hasNext,
    refetch,
    isLoading,
  } = useInfiniteQuery(
    ['page'],
    queryFn === undefined
      ? async ({ pageParam = 1 }) => await getSearch(pageParam, queryString)
      : async ({ pageParam = 1 }) => await queryFn(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !(lastPage.page === lastPage.total_pages) && lastPage.page + 1,
    }
  );

  useEffect(() => {
    refetch();
  }, [location.key, queryString, refetch]);

  useEffect(() => {
    if (inView && hasNext) nextPage();
  }, [hasNext, inView, nextPage]);

  return {
    movies,
    refetch,
    isLoading,
    ref,
  };
};
