import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';
import s from './HomePage.module.scss';
import Parallax from '../../components/Parallax';

const HomePage = ({history}) => {
  return (
    <div className={s.root}>
      <Header/>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading headingLevel={1} className={s.heading}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button color='green' onClick={() => {history.push('/pokedex');
          }}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax/>
        </div>
      </Layout>
      <Footer/>
    </div>
  );
};

export default withRouter(HomePage);