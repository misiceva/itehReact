import React, { useState } from 'react';
import Button from './UI/Button';

function IpAdresa(props) {
  const [ipAdresa, setIpAdresa] = useState('');

  const proveriIpAdresu = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');

      const data = await response.json();
      setIpAdresa(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {ipAdresa ? (
        <div>
          <p>
            <b>Vasa ip adresa je:</b> {ipAdresa.ip}
          </p>
          <p>
            <b>Lokacija:</b> {ipAdresa.country_name}, {ipAdresa.city}
          </p>
        </div>
      ) : (
        <Button onClick={proveriIpAdresu}>Prikaži IP adresu</Button>
      )}
    </>
  );
}

export default IpAdresa;
