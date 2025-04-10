import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { theme } from 'antd';

const ReferrerChart = ({ data }) => {
  const { token: { colorPrimary } } = theme.useToken();
  
  // Generate colors with different hues
  const generateColors = () => {
    const baseColor = colorPrimary;
    return [
      baseColor,
      '#2f9e44', // Green
      '#f59f00', // Yellow
      '#f03e3e', // Red
      '#7950f2'  // Purple
    ];
  };

  // Format referrer URLs for better display
  const formatReferrer = (referrer) => {
    if (referrer === 'direct') return 'Direct';
    
    try {
      const url = new URL(referrer);
      return url.hostname;
    } catch (e) {
      return referrer;
    }
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
      name: 'Traffic Sources',
      colorByPoint: true,
      innerSize: '60%',
      data: data.map(item => ({
        name: formatReferrer(item.name),
        y: item.value,
        custom: {
          fullUrl: item.name
        }
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

ReferrerChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ReferrerChart;
