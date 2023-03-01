import React from 'react';
import PlayAudio from './PlayAudio';
import Meaning from './Meaning';
import { FiExternalLink } from "react-icons/fi";


const SearchResult = ({ definition }) => {

    const _phonetic = definition?.phonetics;
    
    const _foundPhonetic = _phonetic?.find(value => {
        if(value.text)
        return true;
    })

    const _foundPhoneticAudio = _phonetic?.find(value => {
        if(value.audio)
        return true;
    })

    const _noun = definition.meanings?.find(value => {
        if(value.partOfSpeech == 'noun'){
            return true
        }
    })

    const _verb = definition.meanings?.find(value => {
        if(value.partOfSpeech == 'verb'){
            return true
        }
    })

    const _preposition = definition.meanings?.find(value => {
        if(value.partOfSpeech == 'preposition'){
            return true
        }
    })

    const _adverb = definition.meanings?.find(value => {
        if(value.partOfSpeech == 'adverb'){
            return true
        }
    })

    const _conjunction = definition.meanings?.find(value => {
        if(value.partOfSpeech == 'conjunction'){
            return true
        }
    })

    const _adjective = definition.meanings?.find(value => {
        if(value.partOfSpeech == 'adjective'){
            return true
        }
    })

  return (
    <>
    <div className='result-top result-box'>
        <div className="search-word">
            <h1>{definition.word}</h1>
            {definition.phonetic ? <h2>{definition?.phonetic}</h2> : <h2>{_foundPhonetic?.text}</h2>}
        </div>
       {_foundPhoneticAudio && <PlayAudio _foundPhoneticAudio={_foundPhoneticAudio}/> }
    </div>


    {_noun && <Meaning partOfSpeech={_noun?.partOfSpeech} definitions={_noun?.definitions} synonyms={_noun?.synonyms} antonyms={_noun?.antonyms}/>}
    {_verb && <Meaning partOfSpeech={_verb?.partOfSpeech} definitions={_verb?.definitions} synonyms={_verb?.synonyms} antonyms={_verb?.antonyms}/>}
    {_adverb && <Meaning partOfSpeech={_adverb?.partOfSpeech} definitions={_adverb?.definitions} synonyms={_adverb?.synonyms} antonyms={_adverb?.antonyms}/>}
    {_preposition && <Meaning partOfSpeech={_preposition?.partOfSpeech} definitions={_preposition?.definitions} synonyms={_preposition?.synonyms} antonyms={_preposition?.antonyms}/>}
    {_conjunction && <Meaning partOfSpeech={_conjunction?.partOfSpeech} definitions={_conjunction?.definitions} synonyms={_conjunction?.synonyms} antonyms={_conjunction?.antonyms}/>}
    {_adjective && <Meaning partOfSpeech={_adjective?.partOfSpeech} definitions={_adjective?.definitions} synonyms={_adjective?.synonyms} antonyms={_adjective?.antonyms}/>}


    <hr className='line-footer'/>

    <div className="result-footer">
        <p className='font-gray'>Source</p>
        <a className='font-gray' target='_blank' href={definition.sourceUrls} title="Visit source">
            {definition.sourceUrls}
            <FiExternalLink 
            className='external-link-icon'
            size={22} 
            strokeWidth={1.5} 
            stroke="var(--clr-accent)"
            />
        </a>
    </div>
    </>
  )
}

export default SearchResult