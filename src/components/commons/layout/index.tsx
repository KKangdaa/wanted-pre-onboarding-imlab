import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <SidebarWrapper>
        <Sidebar />

        <BodyWrapper>
          <Outlet />
          <Footer />
        </BodyWrapper>
      </SidebarWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SidebarWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

const BodyWrapper = styled.div`
  width: calc(100vw - 220px);
  min-height: calc(100vh - 80px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default Layout;
