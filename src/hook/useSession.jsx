const useSession = () => {
    const get = (key) => {
        const session = sessionStorage.getItem(key)
        return session;
    }
    const set = (key, value) => {
        sessionStorage.setItem(key, value)
        return true;
    }
    return { get, set }
}
export default useSession;