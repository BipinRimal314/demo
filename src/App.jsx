import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import BeliefSection from './components/BeliefSection';
import DifferentiatorSection from './components/DifferentiatorSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TrustedBy />
        <BeliefSection />
        <DifferentiatorSection />
        <ProductSection />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
