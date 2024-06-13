import React, { useState, useEffect } from "react"

const useData = () => {
  const [data, setData] = useState()
  const username = "coalition"
  const password = "skills-test"
  const auth = btoa(`${username}:${password}`)
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev"

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, {
        headers: { Authorization: `Basic ${auth}` },
      })
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])
  return data
}

export default useData
