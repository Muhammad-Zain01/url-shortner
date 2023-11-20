import { useEffect, useState } from "react";
import { getDashboardData } from "../../API/API.request"
import TimeseriesChart from "../timeseries-chart/timeseries-chart.components";
import CountryChart from "../country-chart/country-chart.components";
const UsageCard = () => {
    const [data, setData] = useState({ category: [], data: [] });
    const [link_created, setLinkCreated] = useState(0);
    const [total_views, setTotalViews] = useState(0);
    const handleData = async () => {
        const response = await getDashboardData();
        const timeSeries = {}
        if (response?.status) {
            response?.data?.webdata.map(views => {
                const date = new Date(views.time);
                const dt = `${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getDate()}`
                timeSeries[dt] ? timeSeries[dt]++ : timeSeries[dt] = 1
            })
            setLinkCreated(response?.data?.urls_data.length)
            setTotalViews(response?.data?.webdata.length)
            setData({
                category: Object.keys(timeSeries),
                data: Object.values(timeSeries)
            })
        }

    }
    useEffect(() => {
        document.getElementsByClassName('highcharts-credits')[0].style.display = 'none';
        handleData()
    }, [])

    return (

        <>
            <div>
                <TimeseriesChart data={data} />
            </div>
            <div>
                <CountryChart />
            </div>
        </>
    )
}
export default UsageCard;