import { Container, List } from './style';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { ImFilm } from 'react-icons/im';
import { GiPopcorn } from 'react-icons/gi';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container>
      <ul>
        <List isPath={pathname === '/'} onClick={() => navigate('/')}>
          <AiOutlineHome />
          <span>home</span>
        </List>
        <List
          isPath={pathname === '/top_rated'}
          onClick={() => navigate('/top_rated')}
        >
          <AiOutlineStar />
          <span>top</span>
        </List>
        <List
          isPath={pathname === '/now_playing'}
          onClick={() => navigate('/now_playing')}
        >
          <ImFilm />
          <span>now playing</span>
        </List>
        <List
          isPath={pathname === '/up_coming'}
          onClick={() => navigate('/up_coming')}
        >
          <GiPopcorn />
          <span>upcoming</span>
        </List>
      </ul>
    </Container>
  );
}
