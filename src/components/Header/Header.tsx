import * as React from 'react';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/img/pokemon-logo.svg';
import Menu from './Menu/Menu';
import { GeneralMenu } from '../../routes';

const Header = () => (
  <div className={s.container}>
    <PokemonLogoSvg className={s.logo} />
    <Menu menuElements={GeneralMenu} />
  </div>
);

export default Header;
