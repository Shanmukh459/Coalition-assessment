export const getLineChartData = (data) => {
  console.log(data)
  const systolicData = data.diagnosis_history.map(d => d.blood_pressure.systolic.value)
  const diastolicData = data.diagnosis_history.map(d => d.blood_pressure.diastolic.value)
  const lineChartData = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#E66FD2"
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#8C6FE6"
      }
    ],
  }
  return lineChartData
}