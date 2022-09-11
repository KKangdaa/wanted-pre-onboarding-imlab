import { Container } from './style';
import LoadingIcon from '../../assets/svgs/loading.svg';

export default function Loading() {
  return (
    <Container>
      <img src={LoadingIcon} alt="Loading.." />
    </Container>
  );
}
