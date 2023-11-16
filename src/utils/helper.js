
import { Request } from "./API"
export const TitleParser = async (url) => {
    const html = await Request("GET", `https://cors-anywhere.herokuapp.com/${url}`, {}, { 'X-Requested-With': '' })
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title').innerText;
    return title;
}