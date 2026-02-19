
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import SkillsTable from './components/SkillsTable';
import BlogAndAchievements from './components/BlogAndAchievements';
import Gallery from './components/Gallery';
import ContactModal from './components/ContactModal';
import ContactBottom from './components/ContactBottom';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark bg-[#0a192f]' : 'bg-slate-50'}`}>
      <Header 
        onContactClick={() => setIsContactOpen(true)} 
        isDarkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="experience" className="py-16 bg-white dark:bg-[#112240] transition-colors duration-300">
          <Experience />
        </div>

        <div id="skills" className="py-16 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300">
          <SkillsTable />
        </div>

        <div id="blog-achievements" className="py-16 bg-white dark:bg-[#112240] transition-colors duration-300">
          <BlogAndAchievements />
        </div>

        <div id="gallery" className="py-16 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300">
          <Gallery />
        </div>

        <div id="bottom-contact" className="py-16 bg-white dark:bg-[#112240] border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <ContactBottom />
        </div>
      </main>

      <Footer />

      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </div>
  );
};

export default App;
