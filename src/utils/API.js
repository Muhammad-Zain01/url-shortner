import axios from 'axios';

export async function Request(request_type, url, headers = {}) {
    let config = {
        method: request_type,
        maxBodyLength: Infinity,
        url: url,
        headers
    };

    return await axios.request(config)
        .then((response) => response.data)
        .catch((error) => error);
}

export function Get(url, headers = {}) {
    let uri = `${import.meta.env.VITE_SERVER_URL}${url}`;
    return Request('get', uri, headers);
}

export function Post(url, headers = {}) {
    let uri = `${import.meta.env.VITE_SERVER_URL}${url}`;
    return Request('post', uri, headers);
}

