import { useEffect, useState } from "react";
import { getDashboardData } from "../../API/API.request"
import TimeseriesChart from "../timeseries-chart/timeseries-chart.components";
import CountryChart from "../country-chart/country-chart.components";
import { Card } from "antd";
const UsageCard = () => {
    const [data, setData] = useState({ category: [], data: [] });
    const [link_created, setLinkCreated] = useState(0);
    const [total_views, setTotalViews] = useState(0);
    const [countryData, setCountryData] = useState([])
    const handleData = async () => {
        const response = await getDashboardData();
        const timeSeries = {}
        const tempCountryData = {}
        if (response?.status) {
            response?.data?.webdata.map(views => {
                const location = views?.data?.location;
                const countryCode = location?.countryCode.toLowerCase();
                const date = new Date(views.time);
                const dt = `${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getDate()}`
                timeSeries[dt] ? timeSeries[dt]++ : timeSeries[dt] = 1
                tempCountryData[countryCode] ? tempCountryData[countryCode]++ : tempCountryData[countryCode] = 1
            })
            setLinkCreated(response?.data?.urls_data.length)
            setTotalViews(response?.data?.webdata.length)
            setData({
                category: Object.keys(timeSeries),
                data: Object.values(timeSeries)
            })
            setCountryData(Object.keys(tempCountryData).map(key => [key, tempCountryData[key]]))
        }

    }
    useEffect(() => {
        const cre = document.getElementsByClassName('highcharts-credits')
        cre.length > 0 && Array.from({ length: cre.length }, (_, index) => index).map(idx => cre[idx].style.display = 'none')
        handleData()
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', marginBottom: 20 }}>
                <div style={{width: '100%'}}>
                    <TimeseriesChart data={data} />
                </div>
                <div>
                    <Card>
                        sdf
                    </Card>
                </div>
            </div>
            <CountryChart data={countryData} />
        </div>
    )
}
export default UsageCard;