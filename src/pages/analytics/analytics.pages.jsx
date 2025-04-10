import { useState, useEffect, useCallback } from "react";
import { getDashboardData, GetUrls } from "../../API/API.request";
import { Card, Tabs, Statistic, Table, Tag, Spin, Select } from "antd";
import CountUp from "react-countup";
import {
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  GlobalOutlined,
  LinkOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import TimeseriesChart from "../../components/timeseries-chart/timeseries-chart.components";
import CountryChart from "../../components/country-chart/country-chart.components";
import {
  AnalyticsContainer,
  AnalyticsHeader,
  AnalyticsContent,
  StatsCardContainer,
  StatsCard,
  ChartContainer,
} from "./analytics.styles";
import DeviceChart from "../../components/device-chart/device-chart.component";
import BrowserChart from "../../components/browser-chart/browser-chart.component";
import ReferrerChart from "../../components/referrer-chart/referrer-chart.component";
import DashboardLayout from "../../layout/DashboardLayout";

const { TabPane } = Tabs;

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [timeSeriesData, setTimeSeriesData] = useState({
    category: [],
    data: [],
  });
  const [countryData, setCountryData] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  const [browserData, setBrowserData] = useState([]);
  const [referrerData, setReferrerData] = useState([]);
  const [totalLinks, setTotalLinks] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [linkData, setLinkData] = useState([]);
  const [selectedLink, setSelectedLink] = useState("all");
  const [linkOptions, setLinkOptions] = useState([]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const formatter = (value) => <CountUp end={value} separator="," />;

  const processAnalyticsData = useCallback((webData, urlsData) => {
    // Process time series data
    const timeSeries = {};
    const tempCountryData = {};
    const tempDeviceData = {};
    const tempBrowserData = {};
    const tempReferrerData = {};

    webData.forEach((view) => {
      // Process date for time series
      const date = new Date(view.time);
      const dt = `${date.toLocaleDateString("en-US", {
        month: "short",
      })} ${date.getDate()}`;
      timeSeries[dt] ? timeSeries[dt]++ : (timeSeries[dt] = 1);

      // Process country data
      const location = view?.data?.location;
      const countryCode = location?.countryCode?.toLowerCase();
      if (countryCode) {
        tempCountryData[countryCode]
          ? tempCountryData[countryCode]++
          : (tempCountryData[countryCode] = 1);
      }

      // Process device data
      const device = view?.data?.device?.type || "unknown";
      tempDeviceData[device]
        ? tempDeviceData[device]++
        : (tempDeviceData[device] = 1);

      // Process browser data
      const browser = view?.data?.client?.name || "unknown";
      tempBrowserData[browser]
        ? tempBrowserData[browser]++
        : (tempBrowserData[browser] = 1);

      // Process referrer data
      const referrer = view?.data?.referrer || "direct";
      tempReferrerData[referrer]
        ? tempReferrerData[referrer]++
        : (tempReferrerData[referrer] = 1);
    });

    // Format time series data
    let timeValues = Object.keys(timeSeries).map((dt, idx) => ({
      date: dt,
      value: Object.values(timeSeries)[idx],
    }));

    timeValues.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setTimeSeriesData({
      category: timeValues.map((item) => item.date),
      data: timeValues.map((item) => item.value),
    });

    // Set country data
    setCountryData(
      Object.keys(tempCountryData).map((key) => [key, tempCountryData[key]])
    );

    // Set device data for pie chart
    setDeviceData(
      Object.entries(tempDeviceData).map(([name, value]) => ({ name, value }))
    );

    // Set browser data for pie chart
    setBrowserData(
      Object.entries(tempBrowserData).map(([name, value]) => ({ name, value }))
    );

    // Set referrer data for pie chart
    setReferrerData(
      Object.entries(tempReferrerData).map(([name, value]) => ({ name, value }))
    );

    // Set total counts
    setTotalLinks(urlsData.length);
    setTotalViews(webData.length);
  }, []);

  const processLinksData = useCallback((links, webData) => {
    // Create options for link selector

    const options = [
      { value: "all", label: "All Links" },
      ...links.map((link) => ({
        value: link.keyword,
        label: `${link.keyword}`,
      })),
    ];
    setLinkOptions(options);

    // Process link analytics data
    const linksWithAnalytics = links.map((link) => {
      const views = webData.filter(
        (view) => view?.keyword === link?.keyword
      ).length;

      const lastVisited =
        webData
          .filter((view) => view?.keyword === link?.keyword)
          .sort((a, b) => new Date(b.time) - new Date(a.time))[0]?.time ||
        "Never";

      return {
        key: link?.keyword,
        keyword: link?.keyword,
        original_url: link?.url,
        views,
        created_at: new Date(link.created_at).toLocaleString(),
        last_visited:
          lastVisited !== "Never"
            ? new Date(lastVisited).toLocaleString()
            : "Never",
      };
    });

    console.log("linksWithAnalyticsxs", links);

    setLinkData(linksWithAnalytics);
  }, []);

  const fetchAnalyticsData = useCallback(async () => {
    if (!initialLoadComplete) {
      setLoading(true);
    }

    try {
      // Fetch dashboard data for analytics
      const dashboardResponse = await getDashboardData();
      // Fetch links data
      const linksResponse = await GetUrls();

      if (dashboardResponse?.status && linksResponse?.status) {
        const webData = dashboardResponse?.data[0]?.webdata || [];
        const urlsData = dashboardResponse?.data[0]?.urls_data || [];

        processAnalyticsData(webData, urlsData);
        processLinksData(linksResponse?.data || [], webData);
      }
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }

    setLoading(false);
    setInitialLoadComplete(true);
  }, [initialLoadComplete, processAnalyticsData, processLinksData]);

  useEffect(() => {
    // Hide Highcharts credits
    const hideCredits = () => {
      const credits = document.getElementsByClassName("highcharts-credits");
      if (credits.length > 0) {
        Array.from(credits).forEach((credit) => {
          credit.style.display = "none";
        });
      }
    };

    fetchAnalyticsData();

    // Set interval to hide credits that might be added after charts render
    const interval = setInterval(hideCredits, 500);

    return () => clearInterval(interval);
  }, [fetchAnalyticsData]);

  // Filter data based on selected link
  useEffect(() => {
    if (initialLoadComplete && !loading) {
      // If a specific link is selected, filter the analytics data
      if (selectedLink !== "all") {
        const dashboardData = async () => {
          const response = await getDashboardData();
          if (response?.status) {
            const webData = response?.data[0]?.webdata || [];
            const urlsData = response?.data[0]?.urls_data || [];

            // Filter web data for the selected link
            const filteredWebData = webData.filter(
              (view) => view.keyword === selectedLink
            );

            processAnalyticsData(filteredWebData, urlsData);
          }
        };
        dashboardData();
      } else {
        // If 'all' is selected, fetch all data again
        fetchAnalyticsData();
      }
    }
  }, [
    selectedLink,
    loading,
    fetchAnalyticsData,
    initialLoadComplete,
    processAnalyticsData,
  ]);

  const columns = [
    {
      title: "Short Link",
      dataIndex: "keyword",
      key: "keyword",
      render: (text) => (
        <Tag color="blue">
          <LinkOutlined /> {text}
        </Tag>
      ),
    },
    {
      title: "Original URL",
      dataIndex: "original_url",
      key: "original_url",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text?.length > 50 ? text?.substring(0, 50) + "..." : text}
        </a>
      ),
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
      sorter: (a, b) => a.views - b.views,
      render: (views) => (
        <Tag color={views > 0 ? "green" : "default"}>
          <EyeOutlined /> {views}
        </Tag>
      ),
    },
    {
      title: "Last Visited",
      dataIndex: "last_visited",
      key: "last_visited",
    },
  ];

  return (
    <DashboardLayout>
      <AnalyticsContainer>
        <AnalyticsHeader>
          <h1>
            <BarChartOutlined /> Analytics Dashboard
          </h1>
          <div className="filters">
            <Select
              style={{ width: 300 }}
              placeholder="Select a link"
              onChange={setSelectedLink}
              value={selectedLink}
              options={linkOptions}
              disabled={loading}
            />
          </div>
        </AnalyticsHeader>

        {loading && !initialLoadComplete ? (
          <div className="loading-container">
            <Spin size="large" tip="Loading analytics data..." />
          </div>
        ) : (
          <AnalyticsContent>
            <StatsCardContainer>
              <StatsCard>
                <Statistic
                  title="Total Links"
                  value={totalLinks}
                  formatter={formatter}
                  prefix={<LinkOutlined />}
                  loading={loading}
                />
              </StatsCard>
              <StatsCard>
                <Statistic
                  title="Total Views"
                  value={totalViews}
                  formatter={formatter}
                  prefix={<EyeOutlined />}
                  loading={loading}
                />
              </StatsCard>
              <StatsCard>
                <Statistic
                  title="Countries"
                  value={countryData.length}
                  formatter={formatter}
                  prefix={<GlobalOutlined />}
                  loading={loading}
                />
              </StatsCard>
              <StatsCard>
                <Statistic
                  title="Avg. Views Per Link"
                  value={
                    totalLinks > 0 ? (totalViews / totalLinks).toFixed(1) : 0
                  }
                  formatter={formatter}
                  prefix={<LineChartOutlined />}
                  loading={loading}
                />
              </StatsCard>
            </StatsCardContainer>

            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <LineChartOutlined /> Traffic Overview
                  </span>
                }
                key="1"
              >
                <ChartContainer>
                  <Card
                    title="Views Over Time"
                    bordered={false}
                    loading={loading}
                  >
                    <TimeseriesChart data={timeSeriesData} />
                  </Card>
                  <Card
                    title="Geographic Distribution"
                    bordered={false}
                    loading={loading}
                  >
                    <CountryChart data={countryData} />
                  </Card>
                </ChartContainer>
              </TabPane>

              <TabPane
                tab={
                  <span>
                    <PieChartOutlined /> Visitor Insights
                  </span>
                }
                key="2"
              >
                <ChartContainer>
                  <Card title="Device Types" bordered={false} loading={loading}>
                    <DeviceChart data={deviceData} />
                  </Card>
                  <Card title="Browsers" bordered={false} loading={loading}>
                    <BrowserChart data={browserData} />
                  </Card>
                  <Card
                    title="Traffic Sources"
                    bordered={false}
                    loading={loading}
                  >
                    <ReferrerChart data={referrerData} />
                  </Card>
                </ChartContainer>
              </TabPane>

              <TabPane
                tab={
                  <span>
                    <LinkOutlined /> Link Performance
                  </span>
                }
                key="3"
              >
                <Card bordered={false} loading={loading}>
                  <Table
                    dataSource={linkData}
                    columns={columns}
                    pagination={{ pageSize: 10 }}
                    rowKey="keyword"
                    loading={loading}
                  />
                </Card>
              </TabPane>
            </Tabs>
          </AnalyticsContent>
        )}
      </AnalyticsContainer>
    </DashboardLayout>
  );
};

export default Analytics;
