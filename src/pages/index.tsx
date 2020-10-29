import * as React from "react";
import { Layout } from "../components/Layout";
import { Quote } from "../components/Quote";
import { QuoteAuthor } from "../components/QuoteAuthor";
import { Loader } from "../components/Loader";
import { ErrorAlert } from "../components/ErrorAlert";
import { useFetch } from "../hooks/useFetch";

export const IndexPage: React.FunctionComponent = () => {
  const { response, error, isLoading, refetch } = useFetch<{
    quote: { quoteAuthor: string; quoteGenre: string; quoteText: string };
  }>("https://quote-garden.herokuapp.com/api/v2/quotes/random");

  const {
    quote: { quoteAuthor, quoteGenre, quoteText },
  } = response ?? { quote: {} };

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
