import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../komponente/UI/Button';

const Kontakt = () => {
  return (
    <React.Fragment>
      <section>
        <h1>Kontakt</h1>
        <h2>Adresa: Milosevac</h2>
        <Link to='/'>
          <Button>Nazad</Button>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default Kontakt;
