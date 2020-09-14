import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountry = (props) => {
        const {name}=props.countries;
        const countryStyle={
            border:'1px solid gray',
            margin:'20px',
            padding:'20px',
            borderRadius:'5px'
        }
    return (
        <div style={countryStyle}>
            <Link to={`/country/${name}`}><h1>{name}</h1></Link>
        </div>
    );
};

export default SingleCountry;