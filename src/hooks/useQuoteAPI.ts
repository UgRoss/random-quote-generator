import { useFetch } from './useFetch';

interface Quote {
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
  _id: string;
}

export interface QuoteAPIResponse {
  data: Quote[];
  message: string;
  pagination: {
    currentPage: number;
    nextPage: number | null;
    totalPages: number;
  };
  statusCode: number;
  totalQuotes: number;
}

interface useQuoteAPIParams {
  random?: boolean;
  author?: string;
  genre?: string;
  page?: number;
  limit?: number;
}

export const useQuoteAPI = (params: useQuoteAPIParams) => {
  const apiUrl = `https://quote-garden.herokuapp.com/api/v3/quotes`;
  const urlSearchParams = new URLSearchParams();
  Object.keys(params).forEach((key) => urlSearchParams.set(key, params[key]));

  return useFetch<QuoteAPIResponse>(`${apiUrl}?${urlSearchParams.toString()}`);
};
