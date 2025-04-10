import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { theme } from 'antd';

const DeviceChart = ({ data }) => {
  const { token: { colorPrimary } } = theme.useToken();
  
  // Generate colors based on the primary color
  const generateColors = () => {
    const baseColor = colorPrimary;
    return [
      baseColor,
      baseColor + '99', // 60% opacity
      baseColor + '77', // 47% opacity
      baseColor + '55', // 33% opacity
      baseColor + '33'  // 20% opacity
    ];
  };

  const options = {
    chart: {
      type: 'pie',
      height: 300
    },
    title: {
      text: '',
      align: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: generateColors(),
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          distance: -30,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Devices',
      colorByPoint: true,
      innerSize: '60%',
      data: data.map(item => ({
        name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
        y: item.value
      }))
    }]
  };

  return (
    <div style={{ padding: 20 }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

DeviceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
};

export default DeviceChart;
