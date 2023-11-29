import Cookies from 'js-cookie';

const useCookie = () => {
    const set = (key, value) => {
        return Cookies.set(key, value, { expires: 30, path: '' });
    }
    const get = (key) => {
        return Cookies.get(key)
    }

    return { set, get }
}

export default useCookie;