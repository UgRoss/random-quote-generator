import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './theme.config';
import { IndexPage } from './pages/index';
import { AuthorPage } from './pages/author';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/author/:authorName">
              <AuthorPage />
            </Route>
            <Route path="/">
              <IndexPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
