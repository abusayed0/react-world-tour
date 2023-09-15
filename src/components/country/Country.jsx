import './Country.css'
const Country = ({ countryData, handleVisitedCountryList, visitedCountryList}) => {
    const { name, flags, population, area, cca3 } = countryData;
    
    const isVisited =visitedCountryList.find(addedName => addedName === name.common);
    
    return (
        <div className={`country ${isVisited && "visited"}`}>
            <img src={flags.png} alt="" />
            <h3 style={{ color: isVisited && "tomato" }}>Name : {name.common}</h3>
            <p>Populaton : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            {
                 isVisited ?
                 <p>I visited this country.</p>
                 :
                 <p>I want to visit this country</p>
            }
            <button onClick={()=>{
                // handleIsVisited();
                handleVisitedCountryList(countryData);
            }}>
                {
                    isVisited ? "Make Not Visited"
                        :
                    "Make Visited"
                }
            </button>
            <br />
        </div>
    );
};

export default Country;