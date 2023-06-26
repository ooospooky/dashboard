import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import IPeopleData from '../Interface/IPeopleData'
interface IChartProps {
  peopleData: IPeopleData;
}
export const PieChart:React.FC<IChartProps> = ({peopleData}) => {
  const options: Highcharts.Options = {
    chart: {
      // plotBackgroundColor: null,
      // plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      width: 600, // 設置圖表的寬度
      height: 500
  },
  title: {
      text: '戶數統計',
      align: 'center'
  },
  tooltip: {
      pointFormat: '{point.percentage:.1f}%'
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
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.1f} %',
            style: {
              fontSize: '1.2rem' // 在此設置字體大小
            },
          },
          showInLegend: true
      }
  },
  series: [{
    type: 'pie',
    name: 'Brands',
    // colorByPoint: true,
    data: [{
      name: '共同生活',
      // y: 74.77,
      y:Number(peopleData['household_ordinary_total']),
      sliced: true,
      // selected: true,
      color: '#4f57a2',
    }, {
      name: '獨立生活',
      y: Number(peopleData['household_single_total']),
      color:'#929eff',
    }]
  }]
  }
  return (
    <div  >
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </div>
  )
}
