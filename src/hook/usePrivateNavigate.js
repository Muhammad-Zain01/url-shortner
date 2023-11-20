import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth";
const usePrivateNavigate = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const adminNavigate = (url = '') => {
        if (auth) {
            navigate(`/${auth?.username}/${url}`)
        }
    }
    return { navigate, adminNavigate };
}

export default usePrivateNavigate;