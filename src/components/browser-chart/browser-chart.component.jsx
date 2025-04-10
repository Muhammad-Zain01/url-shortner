import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { theme } from 'antd';

const BrowserChart = ({ data }) => {
  const { token: { colorPrimary } } = theme.useToken();
  
  // Generate colors with different saturations
  const generateColors = () => {
    const baseColor = colorPrimary;
    return [
      baseColor,
      baseColor + 'CC', // 80% opacity
      baseColor + '99', // 60% opacity
      baseColor + '66', // 40% opacity
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
      name: 'Browsers',
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

BrowserChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
};

export default BrowserChart;
