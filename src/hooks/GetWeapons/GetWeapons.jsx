import React, { useEffect, useState } from 'react'

function GetWeapons() {

    const[data, setData] = useState([]);
    const[error, setError] = useState(false);
    const[loading, setLoading] = useState(true);
  
    useEffect(() =>{

        async function fetchData(){
            try{
                const fetchedData = await fetch("https://eldenring.fanapis.com/api/weapons");
                const parsedData = await fetchedData.json();
                setData(parsedData.data)
            }catch(e){
                setError(e)
            }finally{
                setLoading(false)
            }
         }

         fetchData()

    }, [])
     
  return {data, error, loading}

}

export default GetWeapons
