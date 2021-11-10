import React from 'react';

import './Country.css'

const Country = (props) => {
    const { name, subregion, flag } = props.country
    console.log(props.Country)

    return (
        <div className="country bg-primary text-light" >
            <h3> Name : {name}</h3>
            <img src={flag} alt="logo-img" />
            <h4>subregion : {subregion}</h4>

        </div>
    );
};

export default Country;