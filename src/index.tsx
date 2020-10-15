import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { IndexPage } from './pages/index';
import { AuthorPage } from './pages/author';

const App: React.FC = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
