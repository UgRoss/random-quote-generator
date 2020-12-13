import { useFetch } from './useFetch';
import { QuoteAPIResponse } from './useQuoteAPI';

export const useRandomQuoteAPI = () => {
  const apiUrl = `https://quote-garden.herokuapp.com/api/v3/quotes/random`;
  return useFetch<QuoteAPIResponse>(apiUrl);
};
