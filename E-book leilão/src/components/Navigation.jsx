import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Navigation = ({ paginate, currentPage, totalPages }) => {
  const progress = ((currentPage + 1) / totalPages) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-navy text-white flex items-center justify-center z-50 shadow-2xl">
      <div className="w-full max-w-4xl px-4 sm:px-8 flex items-center justify-between">
        {/* Previous Button */}
        <div className="w-1/4 flex justify-start">
          <AnimatePresence>
            {currentPage > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => paginate(-1)}
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden md:inline">Anterior</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Bar and Page Count */}
        <div className="w-1/2 flex flex-col items-center">
          <div className="w-full max-w-xs bg-white/20 rounded-full h-1.5 mb-2">
            <motion.div
              className="bg-emerald h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-sm font-lato">
            Página {currentPage + 1} de {totalPages}
          </span>
        </div>

        {/* Next Button */}
        <div className="w-1/4 flex justify-end">
          <AnimatePresence>
            {currentPage < totalPages - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => paginate(1)}
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <span className="hidden md:inline">Próximo</span>
                <ArrowRight size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navigation;