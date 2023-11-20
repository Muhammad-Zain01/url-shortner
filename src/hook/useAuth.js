import useSession from "./useSession";

const useAuth = () => {
    const SESSION = useSession();
    let session = SESSION.get('user');
    session = session != null && JSON.parse(session);
    return session;
}

export default useAuth;