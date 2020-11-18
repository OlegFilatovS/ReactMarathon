import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const {
    data: { total, pokemons },
    isLoading,
    isError,
  } = useData('getPokemons', query, [searchValue]);

  if (isError) {
    return <div>Error...</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading headingLevel={1} className={s.title}>
          {!isLoading && total} <span className={s.titleHeavy}>Pokemons</span> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={s.cardsWrapper}>
          {!isLoading &&
            pokemons.map((pokemon) => (
              <PokemonCard
                pokemonName={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                attackValue={pokemon.stats.attack}
                defenseValue={pokemon.stats.defense}
                pokemonType={pokemon.types?.[0]}
                pokemonImageSrc={pokemon.img}
              />
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default Pokedex;
