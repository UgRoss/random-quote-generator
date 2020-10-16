import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Quote } from '../components/Quote';
import { Loader } from '../components/Loader';
import { ErrorAlert } from '../components/ErrorAlert';
import { useFetch } from '../hooks/useFetch';

export const AuthorPage: React.FC = () => {
  let { authorName } = useParams();
  const history = useHistory();

  const authorUrl = `https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=3`;
  const { response, error, isLoading, refetch } = useFetch(authorUrl);

  return (
    <Layout onRandomClick={() => history.push('/')}>
      <h1>{authorName}</h1>
      {error && <ErrorAlert />}
      {isLoading && <Loader />}
      {!isLoading && !error && response?.quotes.map(({ quoteText, _id }) => <Quote content={quoteText} key={_id} />)}
    </Layout>
  );
};
