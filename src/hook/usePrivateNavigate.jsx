import { useNavigate } from "react-router-dom"
import useSession from "./useSession";
const PrivateNavigate = () => {
    const session = useSession();
    let sessionData = session.get('user');
    if(sessionData) sessionData = JSON.parse(sessionData)
    const navigate = useNavigate();
    const adminNavigate = (url) => {
        navigate(`/${sessionData?.username}/${url}`)
    }
    return adminNavigate;
}

export default PrivateNavigate;