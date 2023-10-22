export const useHttp = () => {
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState('');

  const request = async ( url,
                          method = 'GET',
                          body = null,
                          headers = {
                            'Content-Type': 'application/json'
                          }
                        ) => {
                                try {
                                  const responseObj = await fetch(url, {method, body, headers});

                                  if (!responseObj.ok) throw new Error(`Could not fetch ${url}, status ${responseObj.status}`);

                                  const data = await responseObj.json();
                                  //setLoading(false);
                                  return data;
                                } catch(error) {
                                  //setLoading(false);
                                  //setError(`${error.message}`);
                                  throw error;
                                }
                              }


  //return {loading, error, request};
  return {request};
}