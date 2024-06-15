import React from 'react'
import "../assets/styles/diagnosticList.css"
import { getdiagnosisRecordsTable } from '../utils/getDiagnosisRecordsTable'

const DiagnosticList = ({ diagnosisRecords }) => {
  const diagnosisRecordsTable = getdiagnosisRecordsTable(diagnosisRecords)

  return (
    <div className='diagnostic-list'>
      <h2>Diagnostic List</h2>
      <div className='table-wrapper'>
        {diagnosisRecordsTable}
      </div>
    </div>
  )
}

export default DiagnosticList