import React, { useState } from 'react'
import { FiPlay } from "react-icons/fi";

const PlayAudio = ({ _foundPhoneticAudio }) => {
  const [error, setError] = useState("");
  
  const playPhonetic = () => {
    let audio = new Audio(_foundPhoneticAudio?.audio);
    if(audio){
      audio.play();
    } else {
      setError("No audio")
    }
  }

  // console.log("_foundPhoneticAudio", _foundPhoneticAudio)

  return (
    <>
    <span 
        className='play-audio'
        onClick={() => playPhonetic()}
        >
            <FiPlay 
            className='icon' 
            size={50} stroke='var(--clr-accent)' 
            fill='var(--clr-accent)'
            title='play audio'
            />
    </span>
    {error ? <p>{error}</p> : ""}
    </>
  )
}

export default PlayAudio