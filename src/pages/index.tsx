import * as React from 'react';
import { Layout } from '../components/Layout';
import { Quote } from '../components/Quote';
import { QuoteAuthor } from '../components/QuoteAuthor';
import { Loader } from '../components/Loader';
import { useFetch } from '../hooks/useFetch';

export const IndexPage: React.FC = () => {
  const { response, error, isLoading, refetch } = useFetch('https://quote-garden.herokuapp.com/api/v2/quotes/random');

  const {
    quote: { quoteAuthor, quoteGenre, quoteText },
  } = response ?? { quote: {} };

  return (
    <Layout onRandomClick={refetch}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Quote content={quoteText} />
          <QuoteAuthor author={quoteAuthor} category={quoteGenre} />
        </>
      )}
    </Layout>
  );
};
