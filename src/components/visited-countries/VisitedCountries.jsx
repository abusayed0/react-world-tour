import './VisitedCountries.css'
const VisitedCountries = ({visitedCountryList}) => {
    return (
        <div>
            {
                visitedCountryList.length > 0 ?
                    <div className="visited-list">
                        <h2>Visited Country : {visitedCountryList.length}</h2>
                        <ul>
                            {
                                visitedCountryList.map(country => <li >{country}</li>)
                            }
                        </ul>
                    </div>
                    :
                    <h2>No country visited</h2>
            }
        </div>
    );
};

export default VisitedCountries;