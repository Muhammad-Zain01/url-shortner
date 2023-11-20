import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Card } from 'antd'
const TimeseriesChart = ({ data }) => {
    const options = {
        title: {
            text: 'Clicks',
            align: 'left'
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        xAxis: {
            categories: data.category,
        },

        series: [
            {
                name: 'Clicks',
                data: data.data
            }
        ],
    }
    return (
        <Card style={{ padding: 20 }}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </Card>
    )
}

export default TimeseriesChart;