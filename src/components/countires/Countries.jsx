import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Countries.css"

const Countries = ({visitedCountryList, handleVisitedCountryList}) => {
    const [countrisData, setCountriesData] = useState([]);

    useEffect(() => {
        const url = "https://restcountries.com/v3.1/all";
        fetch(url)
            .then(res => res.json())
            .then(data => setCountriesData(data))
    }, []);
    return (
        <div>
            <h3>Total Country : {countrisData.length}</h3>
            <div className="country-container">
                {
                    countrisData.map(countryData => <Country
                        key={countryData.cca3}
                        countryData={countryData}
                        visitedCountryList={visitedCountryList}
                        handleVisitedCountryList={handleVisitedCountryList}

                    />)
                }
            </div>
        </div>
    );
};

export default Countries;