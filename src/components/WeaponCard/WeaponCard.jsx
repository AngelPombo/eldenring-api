import React, { useState } from 'react'
import "../WeaponCard/WeaponCard.css"

function WeaponCard({weapon}) {

    const[clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

  return (
    <article className='weapon-card-article' onClick={handleClick}>
        {clicked ?
            <div className='weapon-card-div-back'>
                <h4 className='weapon-card-h4'>Required attributes:</h4>
                    {weapon.requiredAttributes.map((atr) =>{
                        return (
                                <ul className='weapon-card-ul'>
                                    <li key={weapon.index} className='weapon-card-li'>{atr.name} : {atr.amount} </li>
                                </ul>
                                )
                    })}
                <h4 className='weapon-card-h4'>Scales with:</h4>
                    {weapon.scalesWith.map((scaling) =>{
                        return (
                                <ul className='weapon-card-ul'>
                                    <li key={weapon.index} className='weapon-card-li'>{scaling.name} : {scaling.scaling} </li>
                                </ul>
                                )
                    })}
                <h4 className='weapon-card-h4'>Weight: {weapon.weight}</h4>        
            </div>
        :
        <div className='weapon-card-div'>
            <h3 className='weapon-card-name'>{weapon.name}</h3>
            <img className='weapon-card-img' src={weapon.image}></img>
        </div>
        }
    </article>
  )
}

export default WeaponCard
