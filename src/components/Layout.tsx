import { Header, Main, Footer } from './Layout.style';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>Header</Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </>
  );
}

export default Layout;
