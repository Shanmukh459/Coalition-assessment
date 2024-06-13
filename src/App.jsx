import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import useData from "./utils/useData"
import PatientsList from "./components/PatientsList"
import PatientDetail from "./components/PatientDetail"

const App = () => {
  const data = useData()
  if(!data) {
    return <h1>Loading!</h1>
  }

  const selectedPatient = data.filter(d => d.name === "Jessica Taylor")
  console.log(selectedPatient)
  return (
    <div className="app-container">
      <Header />
      <PatientsList data={data} />
      <PatientDetail patientDetails={selectedPatient}/>
    </div>
  )
}

export default App
