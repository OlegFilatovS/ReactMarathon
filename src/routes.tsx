import React from 'react';
import HomePage from './Pages/HomePage';
import Pokedex from './Pages/Pokedex/Pokedex';
import Header from './components/Header/Header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is empty page for {title}!</div>
    </div>
  );
};

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GeneralMenu: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <EmptyPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GeneralMenu.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
