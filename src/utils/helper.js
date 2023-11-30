
import { Request } from "../API/API"
import useCookie from "../hook/useCookies"
export const SignOut = () => {
    const Cookie = useCookie();
    Cookie.remove('token');
    reload();
}
const WebDataExtractor = async (url) => {
    const response = await Request("GET", `${import.meta.env.VITE_SERVER_URL}/proxy/${url}`, {}, { 'X-Requested-With': '' })
    if (response?.response?.status == 500) {
        return false;
    } else {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, 'text/html');
        return doc;
    }
}
export const TitleParser = async (url) => {
    const response = await WebDataExtractor(url)
    if (response) {
        const title = response.querySelector('title')?.innerText;
        return title;
    }
    return response;
}
function joinUrl(baseUrl, relativePath) {
    if (!baseUrl.match(/^https?:\/\//)) {
        baseUrl = 'http://' + baseUrl;
    }
    return new URL(relativePath, baseUrl).href;
}


export const IconParser = async (url) => {
    const response = await WebDataExtractor(url)
    if (response) {
        const linkElements = response.head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
        for (let link of linkElements) {
            if (link.href) {
                let faviconUrl;
                if (link.getAttribute('href').startsWith('http://') || link.getAttribute('href').startsWith('https://')) {
                    faviconUrl = link.getAttribute('href');
                } else {
                    faviconUrl = joinUrl(url, link.getAttribute('href'))
                }
                return faviconUrl;
            }
        }
        return joinUrl(url, '/favicon.ico')
    }
    return response;
}

export const isValidUrl = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}' + // domain name and extension
        '|' + // OR
        'localhost' + // localhost
        '|' + // OR
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})' + // OR IPv4
        '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // port and path
        '(\\?[;&amp;a-zA-Z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-zA-Z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
}
export const validateURL = (url) => {
    if (!url.match(/^https?:\/\//)) {
        url = 'http://' + url;
    }
    return url
}
export const isNumeric = (character) => {
    return !isNaN(Number(character))
}

export const reload = () => { window.location.reload() }