const useSession = () => {
    const get = (key) => {
        const session = sessionStorage.getItem(key)
        return session;
    }
    const set = (key, value) => {
        sessionStorage.setItem(key, value)
        return true;
    }
    const clear = () => {
        sessionStorage.clear();
        return true;
    }
    return { get, set, clear }
}
export default useSession;