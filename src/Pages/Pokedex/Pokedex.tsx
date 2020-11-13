import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';

const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.title}>{data.total} for you to choose your favorite</div>
        <div className={s.cardsWrapper}>
          {data.pokemons.map((pokemon) => (
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
