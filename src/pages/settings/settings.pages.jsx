import DashboardLayout from "../../layout/DashboardLayout";
import DisplayName from "../../components/display-name/display-name.components";
import ChangePassword from "../../components/change-password/change-password.components";
import { SettingContainer } from "./settings.styles";
import { useEffect, useState } from "react";
import { getDisplayName } from "../../API/API.request";
const Settings = () => {
    const [displayName, setDisplayName] = useState('');
    const fetchSettings = async () => {
        const response = await getDisplayName();
        if(response?.status){
            setDisplayName(response?.data);
        }
    }
    useEffect(() => {
        fetchSettings()
    }, [])
    return (
        <DashboardLayout>
            <SettingContainer>
                <DisplayName name={displayName} setName={setDisplayName} />
                <ChangePassword />
            </SettingContainer>
        </DashboardLayout>
    )
}

export default Settings;