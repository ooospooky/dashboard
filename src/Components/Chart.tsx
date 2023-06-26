import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import IPeopleData from '../Interface/IPeopleData'

interface IChartProps {
  peopleData: IPeopleData;
  selectData:string[];
}

export const Chart: React.FC<IChartProps> = ({ peopleData,selectData}) => {
  console.log('ffdsfds', peopleData)
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
    // series: [{
    //   type: 'line',
    //   data: [1, 2, 3]
    // }]
    series: [{
      // specific options for this series instance
      type: 'column',
      // data: [16099, 3120],
      data: [Number(peopleData['household_ordinary_m']), Number(peopleData['household_single_m'])],
      // dataLabels: {
      //           enabled: true
      //       },
      name: '男性',
      stack: 'Europe',
      color: '#5d3f9e',
    },
    {
      // specific options for this series instance
      type: 'column',
      // data: [16214, 3023],
      data: [Number(peopleData['household_ordinary_f']), Number(peopleData['household_single_f'])],
      name: '女性',
      stack: 'Eurpe',
      color: '#C29FFF',
    }
    ]
  }
  return (
    <div  >
      <h2></h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>

  )
}
