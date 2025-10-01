
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Gavel } from 'lucide-react';

const Cover = () => {
  return (
    <motion.div 
      className="w-full h-full bg-navy asphalt-texture flex flex-col items-center justify-center text-white relative overflow-hidden p-8 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-emerald-green rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-gold-yellow transform rotate-45"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Icons */}
        <motion.div 
          className="flex justify-center items-center gap-8 mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Car className="w-20 h-20 text-emerald stroke-1" />
          <Gavel className="w-24 h-24 text-gold stroke-2" />
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="font-montserrat font-bold text-5xl md:text-7xl mb-4 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Como Comprar<br />
          Carro de Leilão
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 
          className="font-lato font-semibold text-emerald text-3xl md:text-4xl mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Guia Prático
        </motion.h2>

        {/* Edition Badge */}
        <motion.div 
          className="inline-block bg-gold text-navy px-8 py-3 rounded-full font-montserrat font-bold text-xl shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
        >
          Edição 2025
        </motion.div>

        {/* Decorative line */}
        <motion.div 
          className="w-32 h-1 bg-emerald mx-auto mt-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Cover;
