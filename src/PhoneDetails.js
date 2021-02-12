import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export const PhoneDetails = ({ match }) => {
const [phone, setPhone] = useState({});
let history = useHistory();

  useEffect(() => {
    fetch(`https://mate-academy.github.io/phone-catalogue-static/api/phones/${match.params.phoneId}.json`)
      .then(res => res.json())
      .then (phone => setPhone(phone))
  }, []);

  if (!phone.id) {
    return null;
  }

  return (
    <div className="col-md-10">
        <img
          className="phone"
          src={`../${phone.images[0]}`}
          alt={phone.name}
        />

        <button 
          type="button"
          onClick={() => history.goBack()}
        >
          Back
        </button>
        <button type="button">Add to basket</button>

        <h1>{phone.name}</h1>

        <p>{phone.description}</p>

        <ul className="phone-thumbs">
          {phone.images.map(image => (
            <li key={Math.random()}>
              <img src={`../${image}`} alt="" />
            </li>
          ))}

        </ul>

        <ul className="specs">
          <li>
            <span>Availability and Networks</span>
            <dl>
              <dt>Availability</dt>
              {phone.availability.map((param) => (
                <dd key={Math.random()}>{param}</dd>
              ))}
              
            </dl>
          </li>
          <li>
            <span>Battery</span>
            <dl>
              <dt>Type</dt>
              <dd>{phone.battery.type}</dd>
              <dt>Talk Time</dt>
              <dd>{phone.battery.talkTime}</dd>
              <dt>Standby time (max)</dt>
              <dd>{phone.battery.standbyTime}</dd>
            </dl>
          </li>
          <li>
            <span>Storage and Memory</span>
            <dl>
              <dt>RAM</dt>
              <dd>{phone.storage.ram}</dd>
              <dt>Internal Storage</dt>
              <dd>{phone.storage.flash}</dd>
            </dl>
          </li>
          <li>
            <span>Connectivity</span>
            <dl>
              <dt>Network Support</dt>
              <dd> </dd>
              <dt>WiFi</dt>
              <dd>{phone.connectivity.wifi}</dd>
              <dt>Bluetooth</dt>
              <dd>{phone.connectivity.bluetooth}</dd>
              <dt>Infrared</dt>
              <dd>{phone.connectivity.infrared ? '✓' : '✘'}</dd>
              <dt>GPS</dt>
              <dd>{phone.connectivity.gps ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li>
            <span>Android</span>
            <dl>
              <dt>OS Version</dt>
              <dd>{phone.android.os}</dd>
              <dt>UI</dt>
              <dd>{phone.android.ui}</dd>
            </dl>
          </li>
          <li>
            <span>Size and Weight</span>
            <dl>
              <dt>Dimensions</dt>
              {phone.sizeAndWeight.dimensions.map(dim => (
                <dd key={Math.random()}>{dim}</dd>
              ))}
              <dt>Weight</dt>
              <dd>{phone.sizeAndWeight.weight}</dd>
            </dl>
          </li>
          <li>
            <span>Display</span>
            <dl>
              <dt>Screen size</dt>
              <dd>{phone.display.screenSize}</dd>
              <dt>Screen resolution</dt>
              <dd>{phone.display.screenResolution}</dd>
              <dt>Touch screen</dt>
              <dd>{phone.display.touchScreen ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li>
            <span>Hardware</span>
            <dl>
              <dt>CPU</dt>
              <dd>{phone.hardware.cpu}</dd>
              <dt>USB</dt>
              <dd>{phone.hardware.usb}</dd>
              <dt>Audio / headphone jack</dt>
              <dd>{phone.hardware.audioJack}</dd>
              <dt>FM Radio</dt>
              <dd>{phone.hardware.fmRadio ? '✓' : '✘'}</dd>
              <dt>Accelerometer</dt>
              <dd>{phone.hardware.accelerometer ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li>
            <span>Camera</span>
            <dl>
              <dt>Primary</dt>
              <dd>{phone.camera.primary}</dd>
              <dt>Features</dt>
              {phone.camera.features.map(feature => (
                <dd key={Math.random()}>{feature}</dd>
              ))}
              
            </dl>
          </li>
          <li>
            <span>Additional Features</span>
            <dd>{phone.additionalFeatures}</dd>
          </li>
        </ul>
      </div>
  );
}