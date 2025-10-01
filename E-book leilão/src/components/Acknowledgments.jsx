import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake as Handshake } from 'lucide-react';

const Acknowledgments = () => {
  return (
    <section className="chapter-section py-16 px-8 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-8">
          <Handshake className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h2 className="font-montserrat font-bold text-4xl text-navy mb-6">
            Agradecimentos
          </h2>
        </div>

        <div className="font-roboto text-lg text-navy space-y-6 leading-relaxed max-w-2xl mx-auto">
          <p>
            Agradecemos a todos os <strong className="font-semibold">profissionais do setor</strong> que contribuíram com suas experiências e conhecimentos para a elaboração deste guia.
          </p>
          
          <p>
            Nosso reconhecimento especial aos <strong className="font-semibold">leiloeiros, mecânicos, despachantes e compradores experientes</strong> que compartilharam suas vivências práticas, tornando este material mais rico e aplicável.
          </p>
          
          <p>
            Este guia é resultado de anos de observação do mercado e coleta de informações de fontes confiáveis. Esperamos que seja útil para todos que desejam ingressar no mundo dos leilões automotivos.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="font-roboto text-gray-600">
            © 2025 - Guia Prático: Como Comprar Carro de Leilão
          </p>
          <p className="font-roboto text-sm text-gray-500 mt-2">
            Este material tem caráter educativo e informativo. Sempre consulte profissionais especializados antes de tomar decisões de investimento.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Acknowledgments;