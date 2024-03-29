import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Characters() {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    setCharacters(data.results);
    setIsLoading(false);

  }, [])

  return (
    <>
    <h1>Rick and Morty Characters</h1>
    {
      isLoading ? <p>Loading...</p>
      : (
      <ul>
        {
          characters.map((character) => {
            return (
                <div key={character.id}>
              <Link to={`/character/${character.id}`}>
                  <li>{character.name}</li>
              </Link>
                </div>
            )
          })
        }
      </ul>
      )
    }
    </>
  )
}
