import React, { useEffect, useRef } from 'react'
import { getLineChartData } from '../utils/getLineChartData'
import { Chart, Line } from 'react-chartjs-2'
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)


const ResultsPlot = ({data}) => {
  const lineChartData = getLineChartData(data)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "right",
        // align: "start",
        
        // labels: {
        //   pointRadius: 10,
        //   usePointStyle: true
        // }
        display: false
      },
      title: {
        text: "Blood Pressure",
        display: true,
        align: 'start', 
        position: 'top',
        padding: {
          top: 10,
          left: 10,
          right: 10,
          bottom: 40
        },
        font: {
          size: "16px"
        }
      },

    },
    scales: {
      x: {
        grid: {
          display: false
        }
      }
    },
  }

  return (
    // <></>
    <Line options={options} data={lineChartData} />
  )
}

export default ResultsPlot