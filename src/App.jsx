import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import useData from "./utils/useData"
import PatientsList from "./components/PatientsList"

const App = () => {
  const data = useData()
  if(!data) {
    return <h1>Loading!</h1>
  }
  return (
    <div className="app-container">
      <Header />
      <PatientsList data={data} />
    </div>
  )
}

export default App
