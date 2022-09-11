import { getUpcoming } from '@apis/index';
import { Container, PageTitle } from '@components/index';
import InfiniteScroll from '@components/InfiniteScroll';

export default function UpComingPage() {
  return (
    <Container>
      <PageTitle title="UPCOMING MOVIES" />
      <InfiniteScroll api={getUpcoming} unique='/movie/upcoming'/>
    </Container>
  );
}
