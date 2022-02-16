import { useEffect, useState } from "react"
import { API } from "./config/api"

function App() {
  const [response, setResponse] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          mode: "no-cors",
          headers: {
            "Content-type": "application/json",
          },
        }
        const data = await API.get("/", config)
        setResponse(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return <>{response?.data} !</>
}

export default App
