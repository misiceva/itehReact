import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../komponente/UI/Button';

const Kontakt = () => {
  return (
    <React.Fragment>
      <section>
        <h1>Kontakt</h1>
        <h2>Adresa: Ruzveltova 5, Beograd</h2>
        <h2>Broj telefona: 011 657 677</h2>
        <Link to='/'>
          <Button>Nazad</Button>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default Kontakt;
