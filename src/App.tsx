import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { LangProvider } from 'hooks/language';

import { CSSVariables } from 'styles/CSSVariables';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <LangProvider>
      <CSSVariables>
        <Routes />
        <GlobalStyle />
      </CSSVariables>
    </LangProvider>
  </BrowserRouter>
);

export default App;
