
import { Request } from "./API"
export const TitleParser = async (url) => {
    const html = await Request("GET", `https://cors-anywhere.herokuapp.com/${url}`, {}, { 'X-Requested-With': '' })
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title').innerText;
    return title;
}
export const IconParser = async (url) => {
    const htmlString = await Request("GET", `https://cors-anywhere.herokuapp.com/${url}`, {}, { 'X-Requested-With': '' })
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const linkElements = doc.head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    for (let link of linkElements) {
        if (link.href) {
            return link.href; // Returns the first found favicon URL
        }
    }
    return null; // Return null if no favicon is found

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
