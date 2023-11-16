import useSession from "../../hook/useSession"
import { Link } from "react-router-dom";
const AdminLink = ({to, children}) => {
    let session = useSession().get('user')
    session = session != null && JSON.parse(session);
    return (
        <Link to={`/${session.username}${to}`}>{children}</Link>
    )
}

export default AdminLink;