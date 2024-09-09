import React, { useState } from 'react'
import "../TalismanList/TalismanList.css"
import GetTalismans from '../../hooks/GetTalismans/GetTalismans';
import TalismanCard from '../TalismanCard/TalismanCard';

function TalismanList() {

    const[search, setSearch] = useState("")

    const {data, error, loading} = GetTalismans();

    console.log(data)

    const filteredData = data.filter((talisman) =>
        talisman.name.toLowerCase().includes(search.toLowerCase())
    )

    function handleChange(e){
        setSearch(e.target.value)
    }

  return (
        <section className='talisman-list-section'>
            <form>
            <input className='talisman-list-input' type='text' placeholder='Search your talisman...' value={search} onChange={handleChange}></input>
            </form>
            {
                loading ? <h3>Cargando datos...</h3>
                :
                <ul className='talisman-list-ul'>
                    {filteredData.length === 0 ?
                    <p className='talisman-list-no-results'>No results were found</p>
                    :
                    filteredData.map((talisman) =>{
                        return <li key={talisman.id}><TalismanCard talisman={talisman}/></li>
                    })}
                </ul>
            }
            {error && <h3>{error}</h3>}
          
        </section>
  )
}

export default TalismanList
