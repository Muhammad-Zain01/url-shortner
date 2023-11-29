import Cookies from 'js-cookie';

const useCookie = () => {
    const set = (key, value) => {
        return Cookies.set(key, value, { expires: 30, path: '' });
    }
    const get = (key) => {
        return Cookies.get(key)
    }
    const remove = (key) => {
        return Cookies.remove(key, { path: '' });
    }

    return { set, get, remove }
}

export default useCookie;