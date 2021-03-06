import React, { useEffect, useState } from 'react';

import Country from '../Country/Country';
import Footer from '../Footer/Footer';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>This is a countries components : {countries.length}</h1>

            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country}>
                    </Country>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Countries;