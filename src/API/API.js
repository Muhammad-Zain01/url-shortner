import axios from 'axios';
import { SignOut } from '../utils/helper';
import useCookie from '../hook/useCookies';
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

export async function authPost(url, data = {}, headers = {}) {
    const cookie = useCookie();
    const token = cookie.get('token')
    const response = await Post(url, { ...data }, { ...headers, 'Authorization': `Bearer ${token}` })
    if(response.message == "INVALID_TOKEN"){
        SignOut();
    }
    return response;
}

