import * as React from 'react';
import s from './Header.module.scss';
import {ReactComponent as PokemonLogoSvg} from './assets/img/pokemon-logo.svg';
import Menu from './Menu/Menu';

const Header = () => (
  <div className={s.container}>
    <PokemonLogoSvg className={s.logo}/>
    <Menu menuElements={[
        { value: 'Home',link: '#' },
        { value: 'Pokédex',link: '#' },
        { value: 'Legendaries',link: '#' },
        { value: 'Documentation',link: '#' }
       ]}/>
  </div>
);

export default Header;
