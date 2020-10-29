import { useState, useEffect } from "react";

interface useFetchReturn<Response> {
  response: null | Response;
  error: Error | null;
  isLoading: boolean | null;
  refetch: () => Promise<void>;
}

export const useFetch = <Response>(
  url: string,
  options?: RequestInit
): useFetchReturn<Response> => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, isLoading, refetch: fetchData };
};
