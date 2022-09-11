import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  NowPlayingPage,
  UpComingPage,
  TopRatedPage,
  SearchMoviePage,
  DetailPage,
} from '@pages/index';
import Layout from '@components/commons/layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/now_playing" element={<NowPlayingPage />} />
          <Route path="/up_coming" element={<UpComingPage />} />
          <Route path="/top_rated" element={<TopRatedPage />} />
          <Route path="/search_movie" element={<SearchMoviePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
