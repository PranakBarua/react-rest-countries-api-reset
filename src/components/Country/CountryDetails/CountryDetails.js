import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name}=useParams();
    //console.log(name);
    const [countryDetails,setCountryDetails]=useState({})
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountryDetails(data))
        console.log(countryDetails)
    },[])
    //console.log(countryDetails.name);
    console.log(countryDetails)

    const {capital,population,region}=countryDetails
  
    return (
        <div>
            {
                countryDetails.length>0 &&
               <div>
                    <h1>{name}</h1>
                    <h3>Capital : {countryDetails[0].capital}</h3>
                    <h3>Population : {countryDetails[0].population}</h3>
                    <h3>Region : {countryDetails[0].region}</h3>
               </div>
            }
           
        </div>
    );
};

export default CountryDetails;