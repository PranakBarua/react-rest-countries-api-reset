import React, { useEffect, useState } from 'react';
import SingleCountry from './SingleCountry/SingleCountry';


const Country = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
    const url='https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            {
                countries.map(cn=><SingleCountry countries={cn} key={cn.alpha2Code}></SingleCountry>)
            }
        </div>
        
    );
};

export default Country;