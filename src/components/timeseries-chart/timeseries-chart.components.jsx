import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Card } from 'antd'
const TimeseriesChart = ({ data }) => {
    const options = {
        title: {
            text: '',
            align: ''
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
                name: 'Views',
                data: data.data
            }
        ],
    }
    return (
        <div style={{padding: 20}}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default TimeseriesChart;