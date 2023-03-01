import React from 'react';


const Meaning = ({ partOfSpeech, definitions, synonyms }) => {
 
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
            <li key={i}>{value.definition}</li>
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
    </>
  )
}

export default Meaning