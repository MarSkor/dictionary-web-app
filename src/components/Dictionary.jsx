import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';
import { FiSearch } from "react-icons/fi";


import axios from 'axios';


const Dictionary = () => {
  const [query, setQuery] = useState("Dictionary");
  const [definition, setDefinition] = useState([]);
  const [error, setError] = useState("")

  const getWord = async() => {
    try{
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      setDefinition(res.data[0])
      setError("")
    } catch (error){
      if (error.response) {
        setError(error.response.data.message)
      } else if (error.request) {
        setError(error.request.data.message)
      } else {
        setError("An error occured.")
      }
    }
  }


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWord();
      setQuery(event.target.value);
    }
  }

  useEffect(() => {
    getWord();
  }, []);


  const handleChange = (e) => {
    if(e.target.value.trim().length > 0){
      setQuery(e.target.value)
    } else {
      setError("Search field cannot be empty.")
    }
  }

  const search = () => {
    getWord();
    setQuery("");
  }


  return (
    <section className='wrapper-content'>
      
      <div className="input-wrap">
        <input 
        type='text' 
        name='search'
        placeholder='Search...'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        spellCheck="true"
        required="required"
        autoComplete='off'
        /> 
        <span className="icon-input-wrap" onClick={search}>
          <FiSearch 
          size={26} 
          strokeWidth={1.5} 
          stroke="var(--clr-accent)"
          title='Search dictionary'
          />
        </span>
      </div>


      <div className="search-result">
        {error ? (
          <div className='error'>
            <p>{error}</p>
          </div>
        ) : ""}

       <SearchResult definition={definition}/> 
      </div>
    </section>
  )
}

export default Dictionary