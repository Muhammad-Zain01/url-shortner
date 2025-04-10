import { useEffect, useState, useCallback } from "react";
import { getDashboardData } from "../../API/API.request";
import TimeseriesChart from "../timeseries-chart/timeseries-chart.components";
import CountryChart from "../country-chart/country-chart.components";
import CountUp from "react-countup";
import { Statistic, Card, Spin } from "antd";
import { 
  LinkOutlined, 
  EyeOutlined, 
  GlobalOutlined 
} from "@ant-design/icons";
import {
  DashboardCardContainer,
  CardContainer,
  DashboardCard,
} from "./dashboard-card.styles";

const DashboardCards = () => {
  const [data, setData] = useState({ category: [], data: [] });
  const [link_created, setLinkCreated] = useState(0);
  const [total_views, setTotalViews] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const formatter = (value) => <CountUp end={value} separator="," />;
  
  const handleData = useCallback(async () => {
    if (!initialLoadComplete) {
      setLoading(true);
    }
    
    try {
      const response = await getDashboardData();
      const timeSeries = {};
      const tempCountryData = {};
      
      if (response?.status) {
        const webData = response?.data[0]?.webdata || [];
        const urlsData = response?.data[0]?.urls_data || [];
        
        webData.forEach((view) => {
          // Process location data
          const location = view?.data?.location;
          const countryCode = location?.countryCode?.toLowerCase();
          
          // Process date for time series
          const date = new Date(view.time);
          const dt = `${date.toLocaleDateString("en-US", {
            month: "short",
          })} ${date.getDate()}`;
          
          timeSeries[dt] ? timeSeries[dt]++ : (timeSeries[dt] = 1);
          
          if (countryCode) {
            tempCountryData[countryCode]
              ? tempCountryData[countryCode]++
              : (tempCountryData[countryCode] = 1);
          }
        });
        
        // Format time series data
        let timeValues = Object.keys(timeSeries).map((dt, idx) => ({
          date: dt,
          value: Object.values(timeSeries)[idx],
        }));
        
        timeValues.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        
        setData({
          category: timeValues.map((item) => item.date),
          data: timeValues.map((item) => item.value),
        });
        
        setLinkCreated(urlsData.length);
        setTotalViews(webData.length);
        setCountryData(
          Object.keys(tempCountryData).map((key) => [key, tempCountryData[key]])
        );
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
    
    setLoading(false);
    setInitialLoadComplete(true);
  }, [initialLoadComplete]);
  
  useEffect(() => {
    const hideCredits = () => {
      const credits = document.getElementsByClassName("highcharts-credits");
      if (credits.length > 0) {
        Array.from(credits).forEach((credit) => {
          credit.style.display = "none";
        });
      }
    };
    
    handleData();
    
    // Set interval to hide credits that might be added after charts render
    const interval = setInterval(hideCredits, 500);
    
    return () => clearInterval(interval);
  }, [handleData]);

  return (
    <DashboardCardContainer>
      {loading && !initialLoadComplete ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <Spin size="large" tip="Loading dashboard data..." />
        </div>
      ) : (
        <>
          <CardContainer>
            <DashboardCard width="32.5">
              <Statistic
                title="Total Links"
                value={link_created}
                formatter={formatter}
                prefix={<LinkOutlined />}
                loading={loading}
              />
            </DashboardCard>
           
            <DashboardCard width="32.5">
              <Statistic
                title="Total Views"
                value={total_views}
                formatter={formatter}
                prefix={<EyeOutlined />}
                loading={loading}
              />
            </DashboardCard>
            
            <DashboardCard width="32.5">
              <Statistic
                title="Countries"
                value={countryData.length}
                formatter={formatter}
                prefix={<GlobalOutlined />}
                loading={loading}
              />
            </DashboardCard>
          </CardContainer>
          
          <CardContainer>
            <DashboardCard width="49.5">
              <Card title="Views Over Time" bordered={false} loading={loading}>
                <TimeseriesChart data={data} />
              </Card>
            </DashboardCard>
            
            <DashboardCard width="49.5">
              <Card title="Geographic Distribution" bordered={false} loading={loading}>
                <CountryChart data={countryData} />
              </Card>
            </DashboardCard>
          </CardContainer>
        </>
      )}
    </DashboardCardContainer>
  );
};

export default DashboardCards;
