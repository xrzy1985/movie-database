import Key from '../private/key';

function buildKey() { return 'https://omdbapi.com?apikey=' + Key(); }

export default function Http(props) {
    if (!props.request.url || !props.request.method) {
        return;
    }
    const query = async () => {
        const response = await fetch({
            url: props.request.url,
            method: props.request.method,
            headers: { ...props.request.headers, "Content-Type": "application/json" },
            body: JSON.stringify(props.request.body || {})
        })
        .catch(e => { return; })
        .json();
        console.log(response);
    }
    query();
}
