import React, { useState, useEffect} from 'react';
import './App.css';
import { PhonesList } from './PhonesList';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PhoneDetails } from './PhoneDetails';

const App = () => {
const [phonesList, setPhonesList] = useState([]);
const [query, setQuery] = useState('');
const [sortOrder, setSortORder] = useState('age');
const [visiblePhones, setVisiblePhones] = useState([]);

useEffect(() => {
  fetch('https://mate-academy.github.io/phone-catalogue-static/api/phones.json')
    .then (response => response.json())
    .then (result => 
      {setPhonesList(result)
      setVisiblePhones(result)})
}, [])

useEffect(() => {
  let result = phonesList.filter(item => (
    item.name.toLowerCase().includes(query.toLowerCase())
  ));

  setVisiblePhones(result);
}, [query])

useEffect(() => {
  if (sortOrder === 'name') {
    setVisiblePhones([...visiblePhones].sort((a, b) => (
      a.name.localeCompare(b.name)
    )))
  } else {
    setVisiblePhones([...visiblePhones].sort((a, b) => (
      a.age - b.age
    )))
  }
}, [sortOrder])

const handleSearch = (e) => {
  setQuery(e.target.value);
};

const handleSort = (e) => {
  setSortORder(e.target.value);
};

  return (
    <>
      <Switch>
        <Route exact path="/static_phone_catalogue">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <section>
                  <p>
                    Search:
                    <input
                      onChange={handleSearch}
                      type="text" 
                      placeholder="phone name..."
                    />
                  </p>

                  <p>
                    Sort by:
                    <select
                      onChange={handleSort}
                    >
                      <option value="age">Newest</option>
                      <option value="name">Alphabetical</option>  
                    </select>
                  </p>
                </section>
              </div>
            </div>

            <div className="col-md-10">
              <PhonesList phonesList={visiblePhones}/>
            </div>
          </div>
        </Route>
        <Route path="/static_phone_catalogue/phones/:phoneId" component={PhoneDetails} />
        <Redirect to="/static_phone_catalogue"/>
      </Switch>
    </>
  );
}

export default App;
