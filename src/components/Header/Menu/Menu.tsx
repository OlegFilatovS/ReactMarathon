import * as React from 'react';
import s from '../Header.module.scss';

interface Props {
  menuElements: Array<string>;
}

const Menu = ({ menuElements }: Props) => {
  const menuList = menuElements.map((el) => (
    <div key={el} className={s.menuElement}>
      <a href="/" className={s.menuLink}>
        {el}
      </a>
    </div>
  ));
  return <nav className={s.menu}>{menuList}</nav>;
};

export default Menu;
