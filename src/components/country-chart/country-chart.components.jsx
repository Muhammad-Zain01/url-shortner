import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataWorld from '@highcharts/map-collection/custom/world.geo.json';
import highchartsMap from "highcharts/modules/map";
import { theme, Card } from 'antd';
highchartsMap(Highcharts);

const CountryChart = ({ data }) => {
    const { token: { colorPrimary } } = theme.useToken();
    const mapOptions = {
        title: '',
        colorAxis: {
            min: 0,
            minColor: colorPrimary + '38',
            maxColor: colorPrimary,
        },

        chart: {
            map: mapDataWorld
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [
            {
                name: "Views",
                states: {
                    hover: {
                        color: colorPrimary
                    }
                },
                dataLabels: {
                    enabled: false,
                    format: "{point.name}"
                },
                allAreas: true,
                data: data
            }
        ]
    };

    return (
        <div style={{ padding: 20 }}>
            <HighchartsReact
                constructorType={'mapChart'}
                highcharts={Highcharts}
                options={mapOptions}
            />
        </div>
    )
}

export default CountryChart;