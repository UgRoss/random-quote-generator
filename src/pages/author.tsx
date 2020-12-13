import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Quote } from '../components/Quote';
import { Loader } from '../components/Loader';
import { ErrorAlert } from '../components/ErrorAlert';
import { useQuoteAPI } from '../hooks/useQuoteAPI';

interface AuthorPageRouterParams {
  authorName: string;
}

export const AuthorPage: React.FunctionComponent = () => {
  const { authorName } = useParams<AuthorPageRouterParams>();
  const history = useHistory();
  const { response, error, isLoading } = useQuoteAPI({ author: authorName, page: 1, limit: 3 });
  const quotes = response?.data ?? [];

  return (
    <Layout onRandomClick={() => history.push('/')}>
      <h1>{authorName}</h1>
      {error && <ErrorAlert />}
      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        quotes.map(({ quoteText, _id }) => <Quote content={quoteText} key={_id} />)}
    </Layout>
  );
};
