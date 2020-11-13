import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  pokemonName: string;
  attackValue: number;
  defenseValue: number;
  pokemonType: string;
  pokemonImageSrc: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemonName,
  attackValue,
  defenseValue,
  pokemonType,
  pokemonImageSrc,
}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading headingLevel={2} className={s.titleName}>
          {pokemonName}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attackValue}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defenseValue}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{pokemonType}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemonImageSrc} alt={pokemonName} />
      </div>
    </div>
  );
};

export default PokemonCard;
