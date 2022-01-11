import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './komponente/Footer';
import PosloviLista from './komponente/PosloviLista';
import IpAdresa from './komponente/ipAdresa';
import Neka from './stranice/Neka';
import Kontakt from './stranice/Kontakt';
import Onama from './stranice/Onama';
import './App.css';
import Button from './komponente/UI/Button';

function App() {
  const [poslovi, setPoslovi] = useState([]);
  const [ucitavaSe, setUcitavaSe] = useState(false);
  const [error, setError] = useState(null);
  const izvuciPosloveHandler = useCallback(async () => {
    setUcitavaSe(true);
    setError(null);

    try {
      const response = await fetch('/data/temp.json');
      if (!response.ok) {
        throw new Error('Nesto nije u redu');
      }

      const data = await response.json();

      const ucitaniPoslovi = [];
      for (const key in data) {
        ucitaniPoslovi.push({
          id: key,
          naslov: data[key].naslov,
          opis: data[key].opis,
          rok: data[key].rok,
        });
      }

      setPoslovi(ucitaniPoslovi);
      setUcitavaSe(false);
    } catch (error) {
      setError(error.message);
    }

    setUcitavaSe(false);
  }, []);

  useEffect(() => {
    izvuciPosloveHandler();
  }, [izvuciPosloveHandler]);

  let sadrzaj = <p>Nisu nadjeni poslovi</p>;

  if (poslovi.length > 0) {
    sadrzaj = <PosloviLista poslovi={poslovi} />;
  }

  if (error) {
    sadrzaj = <p>{error}</p>;
  }

  if (ucitavaSe) {
    sadrzaj = <p>Ucitava se ...</p>;
  }

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <section>
                  <IpAdresa />
                </section>

                <section>{sadrzaj}</section>

                <section>
                  <Button onClick={izvuciPosloveHandler}>
                    Osvezi listu zadatih poslova
                  </Button>
                </section>
              </>
            }
          />
          <Route path='/nesto' element={<p>Nesto</p>} />
          <Route path='/neka' element={<Neka />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/onama' element={<Onama />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
