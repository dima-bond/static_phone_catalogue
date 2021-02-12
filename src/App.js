import React, { useState, useEffect} from 'react';
import './App.css';
import { PhonesList } from './PhonesList'

const App = () => {
const [phonesList, setPhonesList] = useState([]);

useEffect(() => {
  fetch('/api/phones.json')
    .then (response => response.json())
    .then (result => setPhonesList(result))
}, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <section>
            <p>
              Search:
              <input type="text" />
            </p>

            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>

          <section>
            <p>Shopping Cart</p>
            <ul>
              <li>Phone 1</li>
              <li>Phone 2</li>
              <li>Phone 3</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="col-md-10">
        <PhonesList phonesList={phonesList}/>
      </div>
    </div>
  );
}

export default App;
