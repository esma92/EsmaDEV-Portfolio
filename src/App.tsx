import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Projects from './components/Projects/index';
import ScrollToTop from './components/ScrollToTop';
import FloatingBlobs from './components/FloatingBlobs';

// Definimos los blobs...
const blobs = [
    {
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      color: "rgba(216, 180, 254, 0.5)",
      darkColor: "rgba(147, 51, 234, 0.5)",
    },
    {
      top: "50%",
      left: "20%",
      color: "rgba(253, 224, 71, 0.5)",
      darkColor: "rgba(202, 138, 4, 0.5)",
      delay: "2000",
    },
    {
      top: "50%",
      right: "20%",
      color: "rgba(249, 168, 212, 0.5)",
      darkColor: "rgba(219, 39, 119, 0.5)",
      delay: "4000",
    },
    {
      top: "80%",
      left: "50%",
      transform: "translateX(-50%)",
      color: "rgba(167, 243, 208, 0.5)",
      darkColor: "rgba(16, 185, 129, 0.5)",
      delay: "6000",
    },
  ];

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
          {/* Fondo común para toda la aplicación */}
          <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
          
          {/* Contenido de la aplicación */}
          <div className="relative">
          <div className="fixed inset-0 pointer-events-none">
            <FloatingBlobs blobs={blobs} />
          </div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <ScrollToTop />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;