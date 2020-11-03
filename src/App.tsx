import * as React from 'react';
import './styles/style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

interface Props {
  title: string;
}

const App = ({ title = 'Some Cool Title!' }: Props) => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
