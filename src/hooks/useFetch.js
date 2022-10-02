import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch({ apiMethod, apiParams, update }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

  const url = `${window.location.origin}/Esprit/public/Interface/rpc`;

  useEffect(() => {
    setLoading(true);
    axios
      .post(url, {
        id: 1,
        method: apiMethod,
        params: apiParams,
      })
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiMethod, update]);

  return { data, loading };
}

export default useFetch;