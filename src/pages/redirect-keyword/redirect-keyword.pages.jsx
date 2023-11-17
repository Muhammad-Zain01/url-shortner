import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Post } from "../../utils/API";
import { validateURL } from "../../utils/helper";
const RedirectKeyword = () => {
    const { keyword } = useParams();
    useLayoutEffect(() => {
        const getValue = async () => {
            const response = await Post(`/events/verify/keyword/${keyword}`);
            if(response.status == 0){
                window.location.href = validateURL(response?.data?.url)
            }
        }
        getValue()
    })
    return (
        <div>
            {keyword}
        </div>
    )
}

export default RedirectKeyword;