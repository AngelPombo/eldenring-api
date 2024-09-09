import React, { useState } from 'react'
import "../TalismanCard/TalismanCard.css"

function TalismanCard({talisman}) {

    const[clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

  return (
    <article className='talisman-card-article' onClick={handleClick}>
        {clicked ?
            <div className='talisman-card-div-back'>
                <h4 className='talisman-card-h4'>{talisman.effect}</h4>     
            </div>
        :
        <div className='talisman-card-div'>
            <h3 className='talisman-card-name'>{talisman.name}</h3>
            <img className='talisman-card-img' src={talisman.image}></img>
        </div>
        }
    </article>
  )
}

export default TalismanCard
