import Key from '../private/key';

function buildKey() { return 'https://omdbapi.com?apikey=' + Key(); }

export default function HTTP(props) {
    Query(props);
}

function Query(props) {
    if (!props.request.url || !props.request.method) {
        return;
    }
    const query = async (props, req) => {
        const _request = props.request.headers ? { ...req, headers: props.request.headers } : req;
        const response = await fetch(props.request.url, props.request.body ? { ..._request, body: JSON.stringify(props.request.body)} : _request)
            .then(response => response.json())
            .catch(e => { return; });
        console.log(response);
    }
    query(props, { method: props.request.method });
}
