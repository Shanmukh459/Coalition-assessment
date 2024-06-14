import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import useData from "./utils/useData"
import PatientsList from "./components/PatientsList"
import PatientDetail from "./components/PatientDetail"
import DiagnosticList from "./components/DiagnosticList"
import DiagnosisHistory from "./components/DiagnosisHistory"

const App = () => {
  const data = useData()
  if(!data) {
    return <h1>Loading!</h1>
  }

  const selectedPatient = data.filter(d => d.name === "Jessica Taylor")[0]

  console.log(selectedPatient)
  return (
    <div className="app-container">
      <Header />
      <PatientsList data={data} />
      <PatientDetail patientDetails={selectedPatient}/>
      <DiagnosticList diagnosisRecords={selectedPatient.diagnostic_list} />
      <DiagnosisHistory patientData={selectedPatient}/>
    </div>
  )
}

export default App
