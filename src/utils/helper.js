
import { Request } from "./API"
export const TitleParser = async (url) => {
    const html = await Request("GET", `${import.meta.env.VITE_SERVER_URL}/proxy/${url}`, {}, { 'X-Requested-With': '' })
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title').innerText;
    return title;
}
function joinUrl(baseUrl, relativePath) {
    if (!baseUrl.match(/^https?:\/\//)) {
        baseUrl = 'http://' + baseUrl;
    }
    return new URL(relativePath, baseUrl).href;
}


export const IconParser = async (url) => {
    const htmlString = await Request("GET", `${import.meta.env.VITE_SERVER_URL}/proxy/${url}`, {}, { 'X-Requested-With': '' })
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const linkElements = doc.head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
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