import * as React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/img/pokemon-logo.svg';
import Menu from './Menu/Menu';

const Header = () => (
  <div className={s.container}>
    <img src={logo} className={s.logo} alt="pokemon_logo" />
    <Menu menuElements={['Home', 'Pokédex', 'Legendaries', 'Documentation']} />
  </div>
);

export default Header;
