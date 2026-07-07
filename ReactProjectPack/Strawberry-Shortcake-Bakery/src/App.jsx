import './App.css';

import { useState } from 'react';

import HeaderSection from './components/Header';
import HeroSection from './components/Hero';
import CharacterSlider from './components/CharacterSlider';
import BackeryShop from './components/BackeryShop';
import RatingSection from './components/RatingSection';
import FaqSection from './components/FAQ';
import FooterSection from './components/Footer';

import { generateStrawberryTheme } from './data/themeGenerator';
import faqData from "./data/faqData";

function App() {
    const [theme, setTheme] = useState(generateStrawberryTheme());

    return (
        <div
            style={{
                backgroundColor: theme.accent,
                minHeight: '100vh',
                transition: 'all 0.5s ease',
            }}
        >
            <HeaderSection theme={theme} />

            <HeroSection
                theme={theme}
                setTheme={setTheme}
            />

            <CharacterSlider theme={theme} />

            <BackeryShop theme={theme}/>

            <RatingSection theme={theme}/>

            <FaqSection faqData={faqData}
                        theme={theme}/>

            <FooterSection theme={theme}/>
        </div>
    );
}

export default App;