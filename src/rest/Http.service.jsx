export default function HttpService(props) {
    /** @todo Implement spinner component */
    if (!props.request.url || !props.request.method) {
        return;
    }
    const query = async (props, req) => {
        const _request = props.request.headers ? { ...req, headers: props.request.headers } : req;
        const _response = await fetch(props.request.url, props.request.body ? { ..._request, body: JSON.stringify(props.request.body)} : _request)
            .then(response => response.json())
            .then(data => {
                console.log('Received: ', data);
                return data;
            })
            .catch(e => { return; });
    }
    query(props, { method: props.request.method });
}
