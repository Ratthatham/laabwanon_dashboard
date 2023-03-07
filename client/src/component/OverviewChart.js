import React, {useMemo} from 'react'
import { ResponsiveLine } from "@nivo/line"
import { useTheme } from '@mui/material'
import { useGetSalesQuery } from '../state/apiSlice'


const OverviewChart = ({isDashboard = false, view}) => {
  const theme = useTheme();
  const {data, error, isLoading} = useGetSalesQuery();
  console.log(data)
  const [totalSalesLine, totalUnitLine]= useMemo(()=>{
    if(!data) return [];
    const {monthlyData} = data[0];
    console.log('monthlydata',monthlyData)
    const totalSalesLine = {
        "id": "totalSale",
        "color": theme.palette.secondary.main,
        "data": [],
    }

    const totalUnitLine = {
      "id": "totalUnit",
      "color": theme.palette.secondary.main,
      "data": [],
    }

    monthlyData.reduce((arr, {month, totalSales, totalUnits})=>{
      const curSales = arr.sales + totalSales;
      const curUnits = arr.units + totalUnits;
      
      totalSalesLine.data = [
        ...totalSalesLine.data,
        {
          "x": month,
          "y": curSales
        }
      ]

      totalUnitLine.data = [
        ...totalUnitLine.data,
        {
          "x": month,
          "y": curUnits
        }
      ]

      return {sales: curSales, units: curUnits}

    },{sales:0, units:0})

    return [[totalSalesLine], [totalUnitLine]]
    
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

  if(!data || isLoading) return "Loading..."
  console.log(totalSalesLine)

  return (
    
    <ResponsiveLine
        data={view==="sales"? totalSalesLine : totalUnitLine}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.secondary[400],
            },
          },
        }}
        margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=">-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            format: (v) => {
              if(isDashboard) return v.slice(0,3);
              return v;
            },
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard? "" : "Month",
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard? "":`Total ${view==="sales"? "Revenue" : "Units"} for Year`,
            legendOffset: -60,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'nivo' }}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaOpacity={0}
        useMesh={true}
        legends={
          !isDashboard
            ?[{
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 30,
              translateY: -40,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
            }]
            : undefined
      }
    />
  )
}

export default OverviewChart