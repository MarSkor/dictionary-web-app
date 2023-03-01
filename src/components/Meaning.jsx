import React from 'react';


const Meaning = ({ partOfSpeech, definitions, synonyms, antonyms }) => {

    console.log("definitions", definitions)
 
  return (
    <>
    <div className="result-break result">
        <h3>{partOfSpeech}</h3>
        <hr className='line'/>
    </div>

    {definitions ? (
        <div className="result-word result-box">
            <h3 className='font-gray'>Meaning</h3>
            <ul>
            {definitions?.map((value, i) => (
                <div className='definition-box' key={i}>
                    <li>{value.definition}</li>
                    {value.example && <span className='example'><p>"{value.example}"</p></span>}
                </div>
            ))}
            </ul>
        </div>
    ) : ""}

    {synonyms?.length > 0 ? (
        <div className="result-word synonyms pd">
            <h3 className='font-gray'>Synonyms:</h3>
            {synonyms.map((val, i) => (
                <h3 key={i} className='font-accent'>{val}</h3>
            ))}
            
        </div>
    ): null }

    {antonyms?.length > 0 ? (
        <div className="result-word antonyms pd">
            <h3 className='font-gray'>Antonyms:</h3>
            {synonyms.map((val, i) => (
                <h3 key={i} className='font-accent'>{val}</h3>
            ))}
            
        </div>
    ): null }
    </>
  )
}

export default Meaning