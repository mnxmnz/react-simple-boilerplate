import { Global } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomeContainer from './containers/HomeContainer';
import globalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
