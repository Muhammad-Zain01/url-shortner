import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Post } from "../../API/API";
import { validateURL } from "../../utils/helper";
const RedirectKeyword = () => {
    const { keyword } = useParams();
    useEffect(() => {
        const getValue = async () => {
            const deviceInfo = {
                deviceType: navigator.userAgent,
                operatingSystem: navigator.platform,
                screenResolution: `${window.screen.width}x${window.screen.height}`
            };
            
            const response = await Post(`/events/verify/keyword/${keyword}`);
            if (response.status == 0) {
                Post(`/capture`, { deviceInfo, keyword })
                window.location.href = validateURL(response?.data?.url)
            } else {

            }
        }
        getValue()
    })
    return (
        <div></div>
    )
}

export default RedirectKeyword;