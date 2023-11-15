import axios from 'axios';

export async function Request(request_type, url, data = {}, headers = {}) {
    let config = {
        method: request_type,
        maxBodyLength: Infinity,
        url: url,
        headers,
        data: data
    };

    return await axios.request(config)
        .then((response) => response.data)
        .catch((error) => error);
}

export function Get(url, data = {}, headers = {}) {
    let uri = `${import.meta.env.VITE_SERVER_URL}${url}`;
    return Request('get', uri, data, headers);
}

export function Post(url, data = {}, headers = {}) {
    let uri = `${import.meta.env.VITE_SERVER_URL}${url}`;
    return Request('post', uri, data, headers);
}

