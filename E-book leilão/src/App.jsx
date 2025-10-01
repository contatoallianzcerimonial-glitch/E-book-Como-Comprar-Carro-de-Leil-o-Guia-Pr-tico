
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Cover from '@/components/Cover';
import Introduction from '@/components/Introduction';
import Chapter1 from '@/components/Chapter1';
import Chapter2 from '@/components/Chapter2';
import Chapter3 from '@/components/Chapter3';
import Chapter4 from '@/components/Chapter4';
import Chapter5 from '@/components/Chapter5';
import Chapter6 from '@/components/Chapter6';
import Chapter7 from '@/components/Chapter7';
import Chapter8 from '@/components/Chapter8';
import Chapter9 from '@/components/Chapter9';
import Conclusion from '@/components/Conclusion';
import Acknowledgments from '@/components/Acknowledgments';
import Navigation from '@/components/Navigation';

const pages = [
  Cover,
  Introduction,
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Conclusion,
  Acknowledgments,
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < pages.length) {
      setPage([newPage, newDirection]);
    }
  };

  const CurrentPage = pages[page];

  return (
    <>
      <Helmet>
        <title>Como Comprar Carro de Leilão - Guia Prático 2025</title>
        <meta name="description" content="Guia completo para comprar carros em leilão com segurança e economia. Aprenda estratégias, dicas e cuidados essenciais." />
      </Helmet>
      
      <div className="relative w-screen h-screen overflow-hidden bg-light-gray">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x);
              if (swipe > window.innerWidth / 4) {
                paginate(offset.x > 0 ? -1 : 1);
              }
            }}
            className="absolute w-full h-full"
          >
            <div className="w-full h-full overflow-y-auto smooth-scroll">
              <CurrentPage />
            </div>
          </motion.div>
        </AnimatePresence>
        
        <Navigation 
          paginate={paginate} 
          currentPage={page} 
          totalPages={pages.length} 
        />
        
        <Toaster />
      </div>
    </>
  );
}

export default App;
