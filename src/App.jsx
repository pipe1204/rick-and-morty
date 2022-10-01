import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Random from "./utils/random.js"

//components
import Location from "./components/location/Location"
import Resident from "./components/resident/Resident"
import Error from "./components/error/Error"

function App() {

  const [data, setData] = useState()
  const [inputText, setInputText] = useState()
  const [errorMessage, setErrorMessage] = useState(false)
  
    useEffect(() => {

      let id = Random()
      if (inputText) {
        URL = `https://rickandmortyapi.com/api/location/${inputText}`
      } else {
        URL = `https://rickandmortyapi.com/api/location/${id}`
      }


      axios.get(URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
  },[inputText])



   function handleSubmit(e) {
    e.preventDefault()
    if (e.target.universe.value >= 1 && e.target.universe.value <= 126) {
      setInputText(e.target.universe.value)
      setErrorMessage(false)
    } else {
      setErrorMessage(true)
    }
    
   }
   console.log(errorMessage);
   console.log(inputText)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form__content">
          <input name="universe" type="number" placeholder="Search Universe (1 to 126)"/>
          <button className="gradient__background" type="submit">Search</button>
        </div>
        {
          errorMessage && <Error />
        }
      </form>
      <Location 
        info={data}
        universeId={inputText}
      />
      <div className="resident__main__content">
      { 
        data?.residents.map((resident) => (
          
          <Resident 
            key={resident}
            residentData={resident}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
