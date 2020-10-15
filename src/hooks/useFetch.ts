import { useState, useEffect } from 'react';

export const useFetch = (url: string, options?: RequestInit) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, isLoading, refetch: fetchData };
};
