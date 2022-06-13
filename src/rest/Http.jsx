import Key from '../private/key';

export default function Http(value, method, url, headers, body) {
    const API_URL = buildKey();
    const SEARCH_PARAM = value || '';

    const query = async () => {
        const request = await fetch(`${API_URL}&s=${SEARCH_PARAM}`);
        const response = await request.json();
        console.log(response);
    }

    query();
}

function buildKey() { return 'https://omdbapi.com?apikey=' + Key(); }