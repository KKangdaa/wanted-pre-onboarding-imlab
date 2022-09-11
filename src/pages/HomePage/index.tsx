import { getPopular } from '@apis/index';
import { Container, PageTitle } from '@components/index';
import BANNER from '../../assets/images/banner.png';
import * as S from './style';
import InfiniteScroll from '@components/InfiniteScroll';

export default function Homepage() {
  return (
    <>
      <S.Banner src={BANNER} />
      <Container>
        <PageTitle title="WHAT’S POPULAR" />
        <InfiniteScroll api={getPopular} unique='/movie/popular' />
      </Container>
    </>
  );
}
