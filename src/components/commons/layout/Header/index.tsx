import Logo from '@assets/svgs/logo.svg';
import Search from '@assets/svgs/search.svg';
import { useNavigate } from 'react-router-dom';
import { Container, Searchbar } from './style';
import { useState } from 'react';

export default function Navigation() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const searchNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (searchValue === '' || searchValue === undefined || searchValue === null) {
      e.preventDefault();
      return 0;
    }
    e.preventDefault();
    navigate('/search_movie', { state: { value: searchValue } });
  };

  return (
    <Container>
      <img onClick={() => navigate('/')} src={Logo} alt="logo" />
      <Searchbar>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={searchNavigate}>
          <img src={Search} alt="search" />
        </button>
      </Searchbar>
    </Container>
  );
}
