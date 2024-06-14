import React from 'react'
import "../assets/styles/diagnosticList.css"

const DiagnosticList = ({ diagnosisRecords }) => {
  const diagnosisRecordElements = diagnosisRecords.map((d, i) => {
    return (
      <tr key={i}>
        <td>{d.name}</td>
        <td>{d.description}</td>
        <td>{d.status}</td>
      </tr>
    )
})

  console.log(diagnosisRecordElements)

  return (
    <div className='diagnostic-list'>
      <h2>Diagnostic List</h2>
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosisRecordElements} 
        </tbody>
      </table>
    </div>
  )
}

export default DiagnosticList