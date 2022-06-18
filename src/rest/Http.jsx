import { useEffect, useState } from 'react';

export default function useHTTP(props) {
  const [isLoading, setLoading] = useState(false);
  const [resp, setResp] = useState(null);

  useEffect(() => {
    const _request = props.headers ? { ...props, headers: props.headers } : props;
    setLoading(true);
    fetch(props.url, props.body ? { ..._request, body: JSON.stringify(props.body)} : _request)
        .then((resp) => resp.json())
        .then((resp) => {
            setResp(resp);
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
        });
    // Not passing in props, will cause this to run only once, yet still have access to props bc of scoping
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return { isLoading, resp };
}
