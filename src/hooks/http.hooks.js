import { useState, useCallback } from "react"

export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const request = useCallback(async (url,
                                    method = 'GET',
                                    body = null,
                                    headers = {
                                      'Content-Type': 'application/json'
                                    }) => {

    try {
      const responseObj = await fetch(url, {method, body, headers});

      if (!responseObj.ok) throw new Error(`Could not fetch ${url}, status ${responseObj.status}`);

      const data = await responseObj.json();
      setLoading(false);
      return data;
    } catch(error) {
      console.log(error)
        setLoading(false);
        setError(`${error.message}`);
        throw error;
    }
  }, [])

  const clearError = useCallback(() => {
    setError('');
  }, [])

  return {loading, error, request, clearError};
}