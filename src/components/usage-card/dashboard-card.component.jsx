import { useEffect, useState } from "react";
import { getDashboardData } from "../../API/API.request"
import TimeseriesChart from "../timeseries-chart/timeseries-chart.components";
import CountryChart from "../country-chart/country-chart.components";
import CountUp from 'react-countup';
import { Statistic, Skeleton, Space } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import {
    DashboardCardContainer,
    CardContainer,
    DashboardCard,
    ChartSkeleton,
    ChartSkeletonContainer,
    CardSkeletonContainer,
    ButtonSkeleton
} from "./dashboard-card.styles";
const DashboardCards = () => {
    const [data, setData] = useState({ category: [], data: [] });
    const [link_created, setLinkCreated] = useState(0);
    const [total_views, setTotalViews] = useState(0);
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(true);

    const formatter = (value) => <CountUp end={value} separator="," />;
    const handleData = async () => {
        setLoading(true)
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
            let TimeValues = { category: Object.keys(timeSeries), data: Object.values(timeSeries) };
            TimeValues = TimeValues.category.map((dt, _idx) => ({ date: dt, value: TimeValues.data[_idx] }))
            TimeValues.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            setData({
                category: TimeValues.map(item => item.date),
                data: TimeValues.map(item => item.value)
            })
            setLinkCreated(response?.data?.urls_data.length)
            setTotalViews(response?.data?.webdata.length)
            setCountryData(Object.keys(tempCountryData).map(key => [key, tempCountryData[key]]))
        }
        setLoading(false)

    }
    useEffect(() => {
        const cre = document.getElementsByClassName('highcharts-credits')
        cre.length > 0 && Array.from({ length: cre.length }, (_, index) => index).map(idx => cre[idx].style.display = 'none')
        handleData()
    }, [])

    return (
        <DashboardCardContainer>
            {
                !loading ? (
                    <>
                        <CardContainer>
                            <DashboardCard width="49.5">
                                <Statistic title="Total Links" value={link_created} formatter={formatter} />
                            </DashboardCard>
                            {/* <DashboardCard width="24.5">
                                <Statistic title="Qouta Remaining" value={1} formatter={formatter} />
                            </DashboardCard> */}
                            <DashboardCard width="49.5">
                                <Statistic title="Total Views" value={total_views} formatter={formatter} />
                            </DashboardCard>
                            {/* <DashboardCard width="33">
                                    <Statistic title="Active Users" value={2} formatter={formatter} />
                                </DashboardCard> */}
                        </CardContainer>
                        <CardContainer>
                            <DashboardCard width="49.5" >
                                <TimeseriesChart data={data} />
                            </DashboardCard>
                            <DashboardCard width="49.5">
                                <CountryChart data={countryData} />
                            </DashboardCard>
                        </CardContainer>
                    </>
                ) : (
                    <div>
                        <CardSkeletonContainer>
                            <ButtonSkeleton active={true} shape='square' />
                            <ButtonSkeleton active={true} shape='square' />
                        </CardSkeletonContainer>
                        <ChartSkeletonContainer>
                            <ChartSkeleton width="50" active={true}>
                                <DotChartOutlined
                                    style={{
                                        fontSize: 40,
                                        color: '#bfbfbf',
                                    }}
                                />
                            </ChartSkeleton>
                            <ChartSkeleton width="50" active={true}>
                                <DotChartOutlined
                                    style={{
                                        fontSize: 40,
                                        color: '#bfbfbf',
                                    }}
                                />
                            </ChartSkeleton>
                        </ChartSkeletonContainer>
                    </div>
                )
            }
        </DashboardCardContainer>
    )
}
export default DashboardCards;