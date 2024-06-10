import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Logo from './components/Logo/Logo.js';
import Hero from './components/Hero/Hero.js'
import Breakfast from './components/Breakfast/Breakfast.js';
import ColdSubsWraps from './components/ColdSubsWraps/ColdSubsWraps.js';
import HotSubsWraps from './components/HotSubsWraps/HotSubsWraps.js';
import Salads from './components/Salads/Salads.js';
import DrinksCombos from './components/DrinksCombos/DrinksCombos.js';
import FooterHeader from './components/FooterHeader/FooterHeader.js'
import Footer from './components/Footer/Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <Logo />
      <Hero />
      <Breakfast />
      <ColdSubsWraps />
      <HotSubsWraps />
      <Salads />
      <DrinksCombos/>
      <FooterHeader />
      <Footer />
    </div>
  );
}

export default App;
