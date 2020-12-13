import * as React from 'react';
import { Layout } from '../components/Layout';
import { Quote } from '../components/Quote';
import { QuoteAuthor } from '../components/QuoteAuthor';
import { Loader } from '../components/Loader';
import { ErrorAlert } from '../components/ErrorAlert';
import { useRandomQuoteAPI } from '../hooks/useRandomQuoteAPI';

export const IndexPage: React.FunctionComponent = () => {
  const { response, error, isLoading, refetch } = useRandomQuoteAPI();
  const { quoteAuthor, quoteGenre, quoteText } = response?.data[0] ?? {};

  return (
    <Layout onRandomClick={refetch}>
      {error && <ErrorAlert />}
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <Quote content={quoteText} />
          <QuoteAuthor author={quoteAuthor} category={quoteGenre} />
        </>
      )}
    </Layout>
  );
};
