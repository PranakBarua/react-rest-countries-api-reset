import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'
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

    const imgStyle={
        height:'150px',
        width:'200'
    }
    return (
        <div>
            {
                countryDetails.length>0 &&
               <div className="country-section">
                    <h1 className="border-bottom">{name}</h1>
                    <h3 className="border-bottom">Capital : {countryDetails[0].capital}</h3>
                    <h3 className="border-bottom">Population : {countryDetails[0].population}</h3>
                    <h3 className="border-bottom">Region : {countryDetails[0].region}</h3>
                    <h3 className="border-bottom">Sub Region : {countryDetails[0].subregion}</h3>
                    <p className="border-bottom">Alpha2Code : {countryDetails[0].alpha2Code}</p>
                    <p className="border-bottom">Alpha3Code : {countryDetails[0].alpha3Code}</p>
                    <p className="border-bottom">Borders : {countryDetails[0].borders[0]} And {countryDetails[0].borders[1]}</p>
                    <p className="border-bottom">AltSpellings : {countryDetails[0].altSpellings[1]}</p>
                    <img style={imgStyle} src={countryDetails[0].flag} alt=""/>
               </div>
            }
           
        </div>
    );
};

export default CountryDetails;