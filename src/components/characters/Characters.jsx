import { useEffect, useState } from "react"
import axios from "axios"
import "./characters.css"

//components
import Error from "../error/Error.jsx"
import Resident from "../resident/Resident.jsx"

const Characters = () => {
  
    const [link, setLink] = useState()
    const [textInput, setTextInput] = useState()
    const [errorMessage, setErrorMessage] = useState(false)
    const [nameSearch, setNameSearch] = useState("")

  useEffect(() => {
    if(textInput) {
        URL = `https://rickandmortyapi.com/api/character/?name=${textInput}`
    } else {
        URL = "https://rickandmortyapi.com/api/character/"
    }

    axios.get(URL)
    .then(res => setLink(res.data.results))
    .catch(err => console.log(err))
  },[textInput])
  
    console.log(link);
    console.log(textInput);
  
    function handleSubmit(e) {
        e.preventDefault()
        setTextInput(e.target.character.value)
    }

    function handleChange(e) {
        setNameSearch(e.target.value)
        setTextInput(e.target.value)
    }

    function handleClick(id) {
        const name = link.filter((name) => name.id === id)
        setTextInput(name[0].name)
        setNameSearch("")
    }

  return (
        <div className="main__character__div">
          <form onSubmit={handleSubmit}>
          <div className="form__content">
            <div className="search__content"> 
                <input name="character" type="text" placeholder="Search Character" onChange={handleChange}/>
                <button className="search gradient__background" type="submit">Search</button>
            </div>
            <div className={nameSearch ? "modal__content" : "hideModal"}>
            {
                link?.map((characterName) => (
                    <div className="character__name__div" key={characterName.id} onClick={() => handleClick(characterName.id)}>
                        <h4>{characterName.name}</h4>
                    </div>
                ))
            }
            </div>
          </div>
          {

          }
          {
            errorMessage && <Error />
          }
          </form>
          <div className="resident__main__content">
            {
                link?.map((character) => (
                    <Resident 
                        key={character.id}
                        residentData={character.url}
                    />
                ))
            }
          </div>
        </div>
  )
}

export default Characters