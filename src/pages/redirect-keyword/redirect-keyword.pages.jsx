import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CaptureUser } from "../../API/API.request";
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
            const response = await CaptureUser({ deviceInfo, keyword })
            console.log(response);
            // if(response.status){
            //     window.location.href = validateURL(response?.url)
            // }
        }
        getValue()
    })
    return (
        <div></div>
    )
}

export default RedirectKeyword;