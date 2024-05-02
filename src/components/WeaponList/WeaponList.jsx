import React, { useState, useEffect } from 'react'
import GetData from '../../hooks/GetData/GetData';
import WeaponCard from '../WeaponCard/WeaponCard';
import "../WeaponList/WeaponList.css"

function WeaponList() {

    const[search, setSearch] = useState("")

    const {data, error, loading} = GetData();

    console.log(data)

    const filteredData = data.filter((weapon) =>
        weapon.name.toLowerCase().includes(search.toLowerCase())
    )

    function handleChange(e){
        setSearch(e.target.value)
    }

  return (
    <section className='weapon-list-section'>
        <form>
        <input className='weapon-list-input' type='text' placeholder='Search your weapon...' value={search} onChange={handleChange}></input>
        </form>
        {
            loading ? <h3>Cargando datos...</h3>
            :
            <ul className='weapon-list-ul'>
                {filteredData.length === 0 ?
                <p className='weapon-list-no-results'>No results were found</p>
                :
                filteredData.map((weapon) =>{
                    return <li key={weapon.id}><WeaponCard weapon={weapon}/></li>
                })}
            </ul>
        }
        {error && <h3>{error}</h3>}
      
    </section>
  )
}

export default WeaponList
