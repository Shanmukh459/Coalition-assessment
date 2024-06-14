import React from 'react'
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
import { getLineChartData } from '../utils/getLineChartData'


const ResultsPlot = ({data}) => {
  const lineChartData = getLineChartData(data)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        align: "start",
        
        labels: {
          generateLabels: (chart) => {
            const data = chart.data;
            return data.datasets.map((dataset, i) => ({
              text: dataset.label + `\n 160 \n Higher than Average`, // Add custom text here
              fillStyle: dataset.backgroundColor,
              strokeStyle: dataset.borderColor,
              lineCap: dataset.borderCapStyle,
              lineDash: dataset.borderDash,
              lineDashOffset: dataset.borderDashOffset,
              lineJoin: dataset.borderJoinStyle,
              pointStyle: 'circle', // Change point style to circle
              hidden: !chart.isDatasetVisible(i),
              index: i
            }));
          },
          pointRadius: 10,
          usePointStyle: true
        }
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