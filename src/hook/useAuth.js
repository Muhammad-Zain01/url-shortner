import useSession from "./useSession";
import useCookie from "./useCookies";
const useAuth = () => {
    const Session = useSession();
    const Cookie = useCookie();
    const token = Cookie.get('token')
    let session = Session.get('user');
    if (!session) {
        if (token) {
            const session_data = atob(token.split('.')[1]);
            Session.set('user', session_data);
            session = session_data;
        }
    }
    if (!token) {
        Session.clear();
        session = null;
    }
    session = session != null && JSON.parse(session);
    return session;
}

export default useAuth;