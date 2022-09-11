import { getPlaying } from '@apis/index';
import { Container, PageTitle } from '@components/index';
import InfiniteScroll from '@components/InfiniteScroll';

export default function NowPlayingPage() {
  return (
    <Container>
      <PageTitle title="NOW PLAYING MOVIES" />
      <InfiniteScroll api={getPlaying} unique='/movie/now_playing'/>
    </Container>
  );
}
