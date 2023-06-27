import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import IPeopleData from '../Interface/IPeopleData'

interface IChartProps {
  peopleData: IPeopleData;
  selectData:string[];
}

export const Chart: React.FC<IChartProps> = ({ peopleData,selectData}) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'column'
    },

    title: {
      text: '人口數量',
      align: 'center'
    },

    xAxis: {
      categories: ['共同生活', '獨立生活']
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: '數量',
      },
      stackLabels: {
        enabled: true,
        // format: '{total:,.0f}'
        formatter: function () {
          return Highcharts.numberFormat(this.total, 0, '.', ',');
        }
      }
    },

    tooltip: {
      format: '<b>{key}</b><br/>{series.name}: {y}<br/>' 
      // +'Total: {point.stackTotal}'
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    series: [{
      type: 'column',
      // data: [16099, 3120],
      data: [Number(peopleData['household_ordinary_m']), Number(peopleData['household_single_m'])],
      name: '男性',
      stack: 'Europe',
      color: '#6948a2',
    },
    {
      type: 'column',
      // data: [16214, 3023],
      data: [Number(peopleData['household_ordinary_f']), Number(peopleData['household_single_f'])],
      name: '女性',
      stack: 'Eurpe',
      color: '#b487fe',
    }
    ]
  }
  return (
    <div   >
      <HighchartsReact 
        highcharts={Highcharts}
        options={options}
      />
    </div>

  )
}
