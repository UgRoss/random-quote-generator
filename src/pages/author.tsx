import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Quote } from '../components/Quote';
import { Loader } from '../components/Loader';
import { ErrorAlert } from '../components/ErrorAlert';
import { useFetch } from '../hooks/useFetch';

interface AuthorPageRouterParams {
  authorName: string;
}

export const AuthorPage: React.FC = () => {
  const { authorName } = useParams<AuthorPageRouterParams>();
  const history = useHistory();

  const authorUrl = `https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=3`;
  const { response, error, isLoading } = useFetch(authorUrl);

  return (
    <Layout onRandomClick={() => history.push('/')}>
      <h1>{authorName}</h1>
      {error && <ErrorAlert />}
      {isLoading && <Loader />}
      {!isLoading && !error && response?.quotes.map(({ quoteText, _id }) => <Quote content={quoteText} key={_id} />)}
    </Layout>
  );
};
