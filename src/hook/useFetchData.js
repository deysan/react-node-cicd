import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = new Response('React Node CICD');

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.text();

        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};
