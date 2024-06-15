export const getdiagnosisRecordsTable = (diagnosisRecords) => {
  const diagnosisRecordElements = diagnosisRecords.map((d, i) => {
    return (
      <tr key={i}>
        <td>{d.name}</td>
        <td>{d.description}</td>
        <td>{d.status}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Problem/Diagnosis</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{diagnosisRecordElements}</tbody>
    </table>
  )
}
