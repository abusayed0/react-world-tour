
import { useState } from 'react';
import './App.css'
import Countries from './components/countires/Countries'
import VisitedCountries from './components/visited-countries/VisitedCountries'

function App() {
  const [visitedCountryList, setVisitedCountryList] = useState([]);

    const handleVisitedCountryList = (countryData) => {
        const countryName = countryData.name.common;
        let newList = [];
        const isAdded = visitedCountryList.find(name => name === countryName);
        if (isAdded) {
            const remove = visitedCountryList.filter(name => name !== countryName);
            newList = [...remove];
        }
        else {

            newList = [...visitedCountryList, countryName];
        }
        // console.log(newList);
        setVisitedCountryList(newList);
    };


  return (
    <>

      <VisitedCountries 
       visitedCountryList={visitedCountryList}
      />
      <Countries
       setVisitedCountryList={visitedCountryList} 
       handleVisitedCountryList={handleVisitedCountryList}
       visitedCountryList={visitedCountryList}
      />

    </>
  )
}

export default App
