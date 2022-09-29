import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch({ apiMethod, apiParams }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

  const url = "http://10.211.55.20:8080/Esprit/public/Interface/rpc";

  useEffect(() => {
    setLoading(true);
    axios.post(url,
        {
          id: 1,
          method: 'production.executeSQL',
          params: {
            sql: 'SELECT name FROM job'
          },
        },
          {auth: {
            username: 'admin',
            password: 'admin',
          }}
        )
      .then((response) => {
        setLoading(false);
        setData(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, [apiMethod]);

  return { data, loading };
}

export default useFetch;