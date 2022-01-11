import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../komponente/UI/Button';

const Onama = () => {
  return (
    <React.Fragment>
      <section>
        <h1>O nama</h1>
        <Link to='/'>
          <Button>Nazad</Button>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default Onama;
