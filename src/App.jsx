import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Random from "./utils/random.js"

//components
import Location from "./components/location/Location"
import Resident from "./components/resident/Resident"
import Error from "./components/error/Error"
import Characters from "./components/characters/Characters"

function App() {

  const [data, setData] = useState()
  const [inputText, setInputText] = useState()
  const [errorMessage, setErrorMessage] = useState(false)
  const [selected, setSelected] = useState(true)
  
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
   
   function handleClick() {
    setSelected(!selected)
   }

  return (
    <div className="App">
      <div className="tabs__content">
        <button className={selected ? "gradient__text" : ""} onClick={handleClick}>Universes</button>
        <button className={selected ? "" : "gradient__text"} onClick={handleClick}>Characters</button>
      </div>
      {
        selected ? 
        <>
          <form onSubmit={handleSubmit}>
          <div className="form__content">
            <input name="universe" type="number" placeholder="Search Universe (1 to 126)"/>
            <button className="search gradient__background" type="submit">Search</button>
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
        </> :
        <Characters />
      } 
    </div>
  )
}

export default App
