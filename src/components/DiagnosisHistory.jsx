import React from "react"
import Icon from "../utils/Icon"
import "../assets/styles/diagnosisHistory.css"
import ResultsPlot from "./ResultsPlot"

const DiagnosisHistory = ({ patientData }) => {
  return (
    <div className="diagnosis-history">
      <h2>Diagnosis History</h2>
      <div className="diagnosis-history-grid">
        <div className="chart-legend-container">
          <div className="line-chart-container">
            <ResultsPlot data={patientData} />
          </div>
          <div className="chart-legend">
            <div className="chart-legend-item systolic">
              <p>Systolic</p>
              <h3>160</h3>
              <div>
                <Icon icon="arrowUp" />
                <p>Higher than Average</p>
              </div>
            </div>
            <hr></hr>
            <div className="chart-legend-item diastolic">
              <p>Diastolic</p>
              <h3>78</h3>
              <div>
                <Icon icon="arrowDown" />
                <p>Lower than Average</p>
              </div>
            </div>
          </div>
        </div>
        <div className="diagnosis-results">
          <div className="respiratory-rate-result">
            <Icon icon="respiratoryRate" />
            <p className="result-title">Respiratory Rate</p>
            <h2>20 bpm</h2>
            <p>Normal</p>
          </div>
          <div className="temperature-result">
            <Icon icon="temperature" />
            <p className="result-title">Temperature</p>
            <h2>98.6°F</h2>
            <p>Normal</p>
          </div>
          <div className="heart-rate-result">
            <Icon icon="heartBPM" />
            <p className="result-title">Heart Rate</p>
            <h2>78 bpm</h2>
            <p>
              <span>
                <Icon icon="arrowDown" />
              </span>
              Lower than Average
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisHistory
