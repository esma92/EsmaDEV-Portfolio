import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import avatar from '../assets/1667434862571.jpg';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.4
      }
    }
  };

  /** Propuesta de diseño más moderno... */
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden justify-center">
      {/* Content Avatar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar Column */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={avatarVariants}
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow" />
              
              {/* Avatar container */}
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full p-2">
                <img src={avatar} alt="Profile" className="w-full h-full rounded-full object-cover filter hover:brightness-110 transition-all duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="space-y-6">
              <motion.div className="space-y-2" variants={itemVariants}>
                <motion.h2 
                  className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase"
                  variants={itemVariants}
                >
                  {t('hero.welcome')}
                </motion.h2>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
                  variants={itemVariants}
                >
                  {t('hero.greeting')}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300"
                  variants={itemVariants}
                >
                  {t('hero.role')}
                </motion.p>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
                variants={itemVariants}
              >
                {t('hero.description')}
              </motion.p>

              {/* Social Links and CV Download */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-6"
                variants={socialVariants}
              >
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/esma92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    GitHub
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/maria-esther-orozco-vaillant-25a467158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    LinkedIn
                  </span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="group relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('nav.contact')}
                  </span>
                </motion.button>
                {/** Botón para descargar el CV */}
                {/* <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv.pdf"
                  download
                  className="group relative flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-300"
                >
                  <FileDown className="h-5 w-5" />
                  <span className="font-medium">Download CV</span>
                </motion.a> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  /** Este me parece bien */
  // return (
  //   <section className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  //       {/* Columna del Avatar */}
  //       <div className="relative flex justify-center items-center">
  //         <img
  //           src={avatar}
  //           alt="Avatar"
  //           className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-xl"
  //         />
  //       </div>

  //       {/* Columna de Contenido */}
  //       <div className="text-center md:text-left">
  //         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
  //           {t('hero.greeting')}
  //         </h1>
  //         <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
  //           {t('hero.role')}
  //         </h2>
  //         <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
  //           {t('hero.description')}
  //         </p>

  //         {/* Botones de Redes Sociales */}
  //         <div className="flex justify-center md:justify-start space-x-6">
  //           <a
  //             href="https://github.com/esma92"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="p-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:opacity-80 transition-opacity shadow-lg"
  //           >
  //             <Github className="h-6 w-6" />
  //           </a>
  //           <a
  //             href="https://www.linkedin.com/in/maria-esther-orozco-vaillant-25a467158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bv%2FhHvf8%2FSBiFejh0AYD1hQ%3D%3D"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="p-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:opacity-80 transition-opacity shadow-lg"
  //           >
  //             <Linkedin className="h-6 w-6" />
  //           </a>
  //           <button
  //             onClick={scrollToContact}
  //             className="p-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:opacity-80 transition-opacity shadow-lg"
  //           >
  //             <Mail className="h-6 w-6" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}