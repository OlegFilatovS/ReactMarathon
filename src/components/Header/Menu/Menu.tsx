import * as React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from '../Header.module.scss';

interface Props {
  menuElements: Array<{ title: string; link: string }>;
}

const Menu = ({ menuElements }: Props) => {
  const path = usePath();
  const menuList = menuElements.map(({ title, link }) => (
    <div key={title} className={s.menuElement}>
      <A
        href={link}
        className={cn(s.menuLink, {
          [s.activeLink]: link === path,
        })}>
        {title}
      </A>
    </div>
  ));
  return <nav className={s.menu}>{menuList}</nav>;
};

export default Menu;
