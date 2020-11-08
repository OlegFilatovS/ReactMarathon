import * as React from 'react';
import s from '../Header.module.scss';

interface Props {
  menuElements: Array<{value: string, link: string}>;
}

const Menu = ({ menuElements }: Props) => {
  const menuList = menuElements.map(({value,link}) => (
    <div key={value} className={s.menuElement}>
      <a href={link} className={s.menuLink}>
        {value}
      </a>
    </div>
  ));
  return <nav className={s.menu}>{menuList}</nav>;
};

export default Menu;
