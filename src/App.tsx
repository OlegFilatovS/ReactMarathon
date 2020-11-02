import * as React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

interface Props {
  title: string;
}

const App = ({ title = 'Some Cool Title!' }: Props) => {
  return <div className={cn(s.header, 'color')}>{title}</div>;
};

export default App;
